import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Pagos from './screens/Pagos'
import Perfil from './screens/Perfil'
import Servicios from './screens/Servicios'
import Login from './screens/Login'
import DetallePago from './screens/DetallePago'
import { TouchableOpacity } from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const StackApp = createStackNavigator()
  
function Tabs() {
  return(
    <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Pagos') {
            iconName = focused
              ? 'card'
              : 'card-outline';
          } else if (route.name === 'Perfil') {
            iconName = focused 
            ? 'person-circle' 
            : 'person-circle-outline';
          } if (route.name === 'Servicios') {
            iconName = focused 
            ? 'file-tray-stacked' 
            : 'file-tray-stacked-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#4439cc',
        tabBarInactiveTintColor: 'gray',
      })}>
       <Tab.Screen name="Pagos" component={Detalle}
        options={{
          title: 'Pagos',
          headerShown: false,
          headerStyle: {
            backgroundColor: '#4439cc',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'        
          },
        }}
      />
      <Tab.Screen name="Servicios" component={Servicios} 
        options={{
          title: 'Servicios',
          headerStyle: {
            backgroundColor: '#4439cc',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Tab.Screen name="Perfil" component={Perfil} 
        options={{
          title: 'Perfil',
          headerStyle: {
            backgroundColor: '#4439cc',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Tab.Navigator>
  )
}
function Log() {
  return(
    <Stack.Navigator>
      <Stack.Screen name='Login' component={Login}
        options={{
        title: 'PaguayGO',
        headerStyle: {
          backgroundColor: '#4439cc',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        }
      }}/>
    </Stack.Navigator>
  )
}
function Detalle({navigation}) {
  const goBack = () => {
    navigation.navigate('PagosInfo')
  }
  return(
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="PagosInfo" 
        component={Pagos} 
        options={{
          title: 'Pagos',
          headerShown: true,
          headerStyle: {
            backgroundColor: '#4439cc',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Tab.Screen name='DetallePago' 
        component={DetallePago}
        options={{
          title: 'Detalle de Pago',
          headerShown: true,
          headerStyle: {
            backgroundColor: '#4439cc',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft:() => (
            <TouchableOpacity style={{paddingLeft: 10}} onPress={() => goBack()}>
              <Ionicons name='arrow-back-outline' size='1.5rem' color='#fff' />
          </TouchableOpacity> 
          )
        }}
      />
    </Stack.Navigator>
  )
}
const App = () => {
  return (
    <NavigationContainer>
      <StackApp.Navigator initialRouteName='Log' screenOptions={{headerShown: false}}>
        <StackApp.Screen name='Tabs' component={Tabs}/>
        <StackApp.Screen name='Log' component={Log} />
      </StackApp.Navigator>
    </NavigationContainer>
  );
}
export default App;