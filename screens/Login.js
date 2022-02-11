import React, { useState } from "react";
import { TextInput, View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import logo from '../assets/Logotipoicono.png'
import Toast from 'react-native-toast-message';

import { getUsuario } from '../api'

const Login = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [ced, setCed] = useState(null);
  
  const user = {
    correo: email,
    cedula: ced
  }
  const showErrorToast = () => {
    Toast.show({
      type: 'error',
      text1: 'No tienes pagos en PaguayGO 😶',
      text2: 'Lo lamentamos'
    });
  }
  const logeo = () => {
    if (user.correo !== null || user.cedula !== null) {
      getUsuario(user).then(res => {
        let data = res.data
        if (data.deudor.length > 0) {
          localStorage.setItem('usuario', data.deudor[0]._id);
          navigation.navigate('Tabs', {screen: 'Tabs'});
        } else {
          showErrorToast()
        } 
      })
    }
  }

  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image style={styles.imagen} source={logo}/>
      <Text style={{color: '#4439cc', fontSize: 15, fontWeight: '800'}}>
        Bienvenido a PaguayGO
      </Text>
      <small style={{color: 'gray'}}>Ingresa tus credenciales</small>
      <TextInput 
        style={styles.inputs} 
        placeholder="Correo" 
        keyboardType="email-address" 
        onChangeText={(correo)=> setEmail(correo)}
      ></TextInput>
      <TextInput 
        style={styles.inputs} 
        placeholder="Cedula" 
        keyboardType="numeric"
        onChangeText={(cedula)=> setCed(cedula)}
      ></TextInput>
      <TouchableOpacity onPress={() => logeo()}>
        <View style={styles.button}>
          <Text style={{color: 'white', fontSize: 15, fontWeight: 'Bold'}}>
            Iniciar Sesión
          </Text>
        </View>
      </TouchableOpacity> 
      <Toast/>
    </View>
  )
}

const styles = StyleSheet.create({
  inputs: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    width: '60%',
    borderRadius: 30,
    shadowOffset: {width: 2, height:2},
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
  },
  button: {
    backgroundColor: '#4f46e5',
    borderRadius: 30,
    padding: 20,
    margin:10,
    shadowOffset: {width: 2, height:2},
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
  },
  imagen: {
    width: 150,
    height: 150,
    marginBottom: 80
  }
})

export default Login