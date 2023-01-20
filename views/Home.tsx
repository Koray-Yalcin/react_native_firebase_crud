import { View, Text } from 'react-native'
import React from 'react'
import Update from './Update'
import Feed from './Feed'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Home = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName='Feed' screenOptions={{headerShown: false}}>
      <Stack.Screen name='Feed' component={Feed} />
      <Stack.Screen name='Update' component={Update} />
    </Stack.Navigator>
  )
}

export default Home