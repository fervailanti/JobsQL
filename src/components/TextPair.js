import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors, font } from '../styles'

const TextPair = ({
  label,
  text,
  onPress,
  containerStyle,
  numberOfLines,
  size = 'sm',
  align = 'left'
}) => {
  const styles = StyleSheet.create({
    label: {
      color: colors.gray.dark,
      textAlign: align,
      ...font.xs
    },
    text: {
      color: onPress ? colors.primary : colors.black,
      textAlign: align,
      ...font[size]
    },
    textWeight: onPress ? font.normal : font.bold
  })

  return (
    <View style={containerStyle}>
      <Text style={styles.label}>{label}</Text>
      <Text
        style={[styles.text, styles.textWeight]}
        onPress={onPress}
        numberOfLines={numberOfLines}
      >
        {text}
      </Text>
    </View>
  )
}

export default TextPair
