import React from 'react'
import { View, Text } from 'react-native'

import ListPagos from '../components/pagos/ListPagos'

const Pagos = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ListPagos/>
    </View>
  )
}
export default Pagos