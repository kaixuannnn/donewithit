import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import colors from '../config/colors'

const AppButton = ({ title, onPress, color = 'primary' }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor: colors[color] }]}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    borderRadius: 20,
    width: '100%',
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
})
export default AppButton
