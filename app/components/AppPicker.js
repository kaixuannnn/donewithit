import React, { useState } from 'react'
import {
  View,
  TextInput,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'
import AppText from './AppText'
import defaultStyles from '../config/styles'
import PickerItem from './PickerItem'

const AppPicker = ({
  icon,
  items,
  onSelectItem,
  placeholder,
  selectedItem,
}) => {
  const [modalVisible, setmodalVisible] = useState(false)
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setmodalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.medium}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <MaterialCommunityIcons
            name='chevron-down'
            size={20}
            color={colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType='slide'>
        <Button title='close' onPress={() => setmodalVisible(false)}></Button>
        <FlatList
          data={items}
          keyExtractor={(item) => item.value.toString()}
          renderItem={({ item }) => (
            <PickerItem
              label={item.label}
              onPress={() => {
                setmodalVisible(false)
                onSelectItem(item)
              }}
            />
          )}
        ></FlatList>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
})

export default AppPicker
