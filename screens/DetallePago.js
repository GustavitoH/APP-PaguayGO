import React from "react";
import { Text, View, StyleSheet } from "react-native";
import QRCode from 'react-native-qrcode-svg';

const DetallePago = ({navigation, route}) => {
  const data = route.params.data.pago
  return(
    <View style={styles.content}>
      <View style={styles.containerHeader}>
        <Text style={{color:'#fff', fontSize:50, fontWeight: 'bold'}}>{data.cobradors[0].nombre}</Text>
        <Text style={{color:'#fff'}}>{data.cobradors[0].servicio}</Text>
      </View>
      <View style={styles.containerDetalle}>
        <Text style={{color:'#4439cc', fontSize:20, fontWeight: 'bold'}}>Detalles</Text>
        <View style={styles.conteinerData}>
          <View>
            <QRCode value={`ID: ${data._id}`}/>
          </View>
          <View style={{padding: 20}}>
            <Text style={{fontSize:15, fontWeight: 'semibold'}}><strong>RUC: </strong>{data.cobradors[0].ruc}</Text>
            <Text style={{fontSize:15, fontWeight: 'semibold'}}><strong>Dirección: </strong>{data.cobradors[0].direccion}</Text>
            <Text style={{fontSize:15, fontWeight: 'semibold'}}><strong>Fecha: </strong>{data.fecha.substr(0, 10)}</Text>
          </View>
        </View>
        <View style={{paddingVertical: 30}}>
          <View style={styles.conteinerPrecio}>
            <Text style={{fontSize:20, fontWeight: 'bold', color:'#fff'}}>${data.total}</Text>
          </View>
          <Text style={{color:'#4439cc', fontSize:15, fontWeight: 'bold', textAlign:'center', paddingVertical:20}}>¡Gracias por confiar en nosotros!</Text>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  content:{
    backgroundColor: '#4439cc',
    height: '50%'
  },
  containerHeader:{
    textAlign:'center',
    paddingVertical: 90
  },
  containerDetalle: {
    padding:30,
    backgroundColor: '#fff',
    height: '150%',
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 15,
      height: 0,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,
    elevation: 22,
  },
  conteinerData: {
    justifyContent:'center',
    flexDirection: 'row',
    borderRadius: 25,
    padding:30,
    marginTop:20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.15,
    shadowRadius: 16.00,
  },
  conteinerPrecio: {
    backgroundColor:'#fb7185',
    padding:10,
    paddingHorizontal:50,
    borderRadius:25,
    textAlign:'center',
    margin:'auto'
  }
})

export default DetallePago