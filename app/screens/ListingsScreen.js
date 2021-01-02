import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet } from 'react-native'

import listingsApi from '../api/listings'

import Card from '../components/Card'
import colors from '../config/colors'
import Screen from '../components/Screen'
import AppText from '../components/AppText'
import ActivityIndicator from '../components/AcitivityIndicator'
import useApi from '../hooks/useApi'

const ListingsScreen = ({ navigation }) => {
  const { data: listings, error, loading, request: loadListings } = useApi(
    listingsApi.getListings
  )
  useEffect(() => {
    loadListings()
  }, [])
  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>Couldn't retrieve the listings.</AppText>
          <Button title='Retry' onPress={loadListings} />
        </>
      )}
      <ActivityIndicator visible={loading} />
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            onPress={() => navigation.navigate('ListingDetails', item)}
            title={item.title}
            subtitle={'$ ' + item.price}
            imageUrl={item.images[0].url}
          />
        )}
      ></FlatList>
    </Screen>
  )
}
const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
})
export default ListingsScreen
