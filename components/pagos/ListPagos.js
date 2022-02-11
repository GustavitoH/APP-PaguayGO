import React, { useEffect, useState } from 'react'
import { View, FlatList} from 'react-native'
import Toast from 'react-native-toast-message';

import ItemPagos from './ItemPagos'
import { getPagos } from '../../api'

const ListPagos = () => {
  const [pagos, setPagos] = useState([]);

  useEffect(() => {
    const deudor = {
      deudor: localStorage.getItem('usuario')
    }
    getPagos('pagosfull').then( res => {
      const data = res.data.pagosfull.filter(e => 
        e.deudor == deudor.deudor
      )
      setPagos(data)
      showToast()
    })
    }, []);
  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Bienvenido a PaguayGO Mobile 👋',
      text2: '¡Bienvenido!'
    });
  }
  const renderItem = (pago) => (
    <ItemPagos pago={pago.item}/>
  );
  return (
    <View style={{ flex: 1, width: '90%'}}>
      <FlatList
        data={pagos}
        renderItem={renderItem}
        keyExtractor={item => item._id}
      >
      </FlatList>
      <Toast/>
    </View>
  )
}
export default ListPagos;