import React, { useState } from 'react'
import { View, TextInput, Text, Switch } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import ListingEditScreen from './app/screens/ListingEditScreen'
import Screen from './app/components/Screen'
import AuthNavigator from './app/navigation/AuthNavigator'
import navigationTheme from './app/navigation/navigationTheme'
import AppNavigator from './app/navigation/AppNavigator'

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  )
}
