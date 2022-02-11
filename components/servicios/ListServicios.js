import React, { useEffect, useState } from 'react'
import { View, FlatList} from 'react-native'

import ItemServicios from './ItemServicios'
import { getServicios } from '../../api'

const ListServicios = () => {
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    getServicios('cobradores').then( res => {
      const data = res.data;
      setServicios(data.cobrador)
    })
  }, []);
  const renderItem = (servicio) => (
    <ItemServicios servicio={servicio.item}/>
  );
  return (
    <View style={{ flex: 1, width: '90%'}}>
      <FlatList
        data={servicios}
        renderItem={renderItem}
        keyExtractor={item => item._id}
      >
      </FlatList>
    </View>
  )
}
export default ListServicios;