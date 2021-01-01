import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import colors from '../config/colors'

import AppText from './AppText'
import ListItem from './ListItem'

const ListingDetailsScreen = () => {
  return (
    <View>
      <Image
        style={styles.image}
        source={require('../assets/jacket.jpg')}
      ></Image>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.subtitle}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require('../assets/mosh.jpg')}
            title='Mosh Hamedani'
            subTitle='5 Listings'
          />
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
})

export default ListingDetailsScreen
