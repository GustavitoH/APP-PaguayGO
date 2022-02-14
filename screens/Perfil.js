import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'

import imgPerfil from '../assets/Perfil.png'

import { getDeudor, getPagos, getServicios } from '../api'

const Perfil = ({navigation}) => {
  const [perfil, setPerfil] = useState([]);
  const [pagos, setPagos] = useState([]);
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    getServicios('cobradores').then( res => {
      const data = res.data;
      setServicios(data.cobrador)
    })
  }, []);

  useEffect(() => {
    const deudor = {
      deudor: localStorage.getItem('usuario')
    }
    getPagos('pagosfull').then( res => {
      const data = res.data.pagosfull.filter(e => 
        e.deudor == deudor.deudor
      )
      setPagos(data)
    })
    }, []);

  const id = localStorage.getItem('usuario')
  useEffect(() => {
    getDeudor(id).then( res => {
      const data = res.data.deudor[0]
      setPerfil(data)
    })
  }, [])
  const cerrarSesion = () => {
    localStorage.removeItem('usuario');
    navigation.navigate('Log');
  }
  return (
    <View style={styles.container}>
        <Image 
          style={{width: 256, height: 256, marginBottom:15}}
          source={imgPerfil}
          resizeMode='contain'
        />
      <Text style={{fontSize: 25, fontWeight:'bold'}}>{perfil.nombre}</Text>
      <Text style={{fontSize: 16, color:'gray', textAlign:'center'}}>¡Bienvenido a tu perfil!</Text>
      <View style={{borderRadius:30, marginVertical:25, flexDirection: 'row', justifyContent:'space-between'}}>
        <View style={{marginHorizontal:20}}>
          <Text style={{fontSize: 20, fontWeight:'bold', textAlign:'center'}}>{pagos.length}</Text>
          <Text style={{fontSize: 12, fontWeight:'bold'}}>Pagos</Text>
        </View>
        <View style={{marginHorizontal:20}}>
          <Text style={{fontSize: 20, fontWeight:'bold', textAlign:'center'}}>{servicios.length}</Text>
          <Text style={{fontSize: 12, fontWeight:'bold'}}>Servicios</Text>
        </View>
      </View>
      <View style={{paddingTop: 20}}>
        <Text style={{fontSize: 16, fontWeight:'bold'}}>Correo:</Text>
        <Text style={{fontSize: 16}}>{perfil.correo}</Text>
        <Text style={{fontSize: 16, fontWeight:'bold'}}>Cedula:</Text>
        <Text style={{fontSize: 16}}>{perfil.cedula}</Text>
        <Text style={{fontSize: 16, fontWeight:'bold'}}>Telefono:</Text>
        <Text style={{fontSize: 16}}>{perfil.telefono}</Text>
        <View style={{flexDirection: 'row', margin:20, paddingVertical:20}}>
          <TouchableOpacity
            style={{backgroundColor:'#fb7185', padding:10, width:350, borderRadius:30 }}
            onPress={() => cerrarSesion()}
            >
            <Text style={{textAlign:'center', color:'#fff', fontSize:15}}>Cerrar Sesión</Text>
          </TouchableOpacity>
        </View>
      </View> 
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
  },
})
export default Perfil