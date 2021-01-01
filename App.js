import React, { useState } from 'react'
import { View, TextInput, Text, Switch } from 'react-native'
import Card from './app/components/Card'
import ListingDetailsScreen from './app/components/ListingDetailsScreen'
import AccountScreen from './app/screens/AccountScreen'
import MessagesScreen from './app/screens/MessagesScreen'
import ViewImageScreen from './app/screens/ViewImageScreen'
import WelcomeScreen from './app/screens/WelcomeScreen'
import Screen from './app/components/Screen'
import Icon from './app/components/Icon'
import ListItem from './app/components/ListItem'
import ListingsScreen from './app/screens/ListingsScreen'
import AppTextInput from './app/components/AppTextInput'
import AppPicker from './app/components/AppPicker'
import LoginScreen from './app/screens/LoginScreen'
import RegisterScreen from './app/screens/RegisterScreen'
import ListingEditScreen from './app/screens/ListingEditScreen'
import { useEffect } from 'react'
import * as ImagePicker from 'expo-image-picker'

export default function App() {
  const requestPermission = async () => {
    const result = await ImagePicker.requestCameraRollPermissionsAsync()
    if (!result.granted)
      alert('You need to enable permission to access the library')
  }
  useEffect(() => {
    requestPermission()
  }, [])
  return <Screen></Screen>
}
