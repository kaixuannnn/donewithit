import React from 'react'
import LottieView from 'lottie-react-native'

const AcitivityIndicator = ({ visible = false }) => {
  if (!visible) return null
  return (
    <LottieView
      autoplay
      loop
      source={require('../assets/animations/loader.json')}
    />
  )
}

export default AcitivityIndicator
