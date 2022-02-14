import React from "react";
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { useNavigation } from "@react-navigation/native";

const ItemPagos = (pago) => {
    const navigation = useNavigation()
    
    const detalle = () =>{
      navigation.navigate ('DetallePago', {data: pago})
    }
    return (
      <View style={styles.container}>
        <TouchableOpacity style={{width:'80%'}} onPress={() => detalle()}>
            <Text style={{color: '#4439cc'}}><strong>{pago.pago.cobradors[0].nombre}</strong></Text>
            <small  style={{color: '#727272', paddingTop: 5}}>Pago realizado el {pago.pago.fecha.substr(0, 10)}</small>
        </TouchableOpacity>
        <TouchableOpacity style={styles.valor}>
            <small style={{color: '#fff', padding: 3}}><strong>$ {pago.pago.total}</strong></small>
        </TouchableOpacity>
      </View>
    )
  }

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: '1.2rem',
    marginVertical: 8,
    flexDirection: 'row',
    borderRadius: 15,
    shadowOffset: {width: 2, height:2},
    shadowOpacity: 0.05,
    shadowRadius: 3.84,
    justifyContent:'space-between',
  },
  valor: {
    padding: 7,
    borderRadius: 15,
    backgroundColor: '#fb7185',
    margin: '0.3rem',
    padding: '0.5rem',
  }
})

export default ItemPagos;