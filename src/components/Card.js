import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { colors, shadow } from '../styles'

const Card = ({ children, style, withShadow, outlined, onPress }) => {
  const cardStyles = StyleSheet.create([
    {
      padding: 16,
      backgroundColor: colors.white,
      borderRadius: 16
    },
    withShadow && shadow,
    outlined && {
      borderWidth: 1,
      borderColor: colors.gray.light
    }
  ])
  const options = {
    normal: <View style={[cardStyles, style]}>{children}</View>,
    touclable: (
      <TouchableOpacity style={[cardStyles, style]} onPress={onPress}>
        {children}
      </TouchableOpacity>
    )
  }
  return onPress ? options.touclable : options.normal
}

export default Card
