import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './views/Home'
import Create from './views/Create'
import Icon from 'react-native-vector-icons/FontAwesome'

const App = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray'
      }}>
        <Tab.Screen name='Home' component={Home} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (<Icon name='home' color={color} size={size} />)
        }}></Tab.Screen>
        <Tab.Screen name='Create' component={Create} options={{
          tabBarLabel: 'Create',
          tabBarIcon: ({color, size}) => (<Icon name='pencil' color={color} size={size} />)
        }}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App