import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { Dimensions } from 'react-native';


  const ItemServicios = (servicio) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
          <Text style={{color: '#4439cc'}}><strong>{servicio.servicio.nombre}</strong></Text>
          <Text style={{color: '#727272', paddingTop: 5}}>{servicio.servicio.servicio}</Text>
          <Text style={{color: '#727272', paddingTop: 5}}>servicio realizado el {servicio.servicio.direccion}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.valor}>
          <Text style={{color: '#fb7185', padding: 3}}><strong>RUC: </strong>{servicio.servicio.ruc}</Text>
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
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    justifyContent:'space-between',
  },
  valor: {
  }
})

export default ItemServicios;