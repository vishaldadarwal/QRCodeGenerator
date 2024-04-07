import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

export const Splash = ({ navigation }) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("DrawerNavigator")
    }, 2000)
  }, [])
  return (
    < View style={{ backgroundColor: "orange", flex: 1, justifyContent: "center", alignItems: "center" }} >
      <Text> Splash </Text>
    </View >
  )
}