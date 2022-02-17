import React from 'react'
import { View, Text } from 'react-native'

import ListServicios from '../components/servicios/ListServicios'

const Servicios = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ListServicios/>
    </View>
  )
}
export default Servicios