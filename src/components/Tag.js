import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { colors, font, icons } from '../styles'
import Icon from 'react-native-vector-icons/Fontisto'

const Tag = ({ icon, text, withBackground, style, size = 'xs' }) => {
  const tagStyle = [styles.tag, withBackground && styles.background, style]
  return (
    <View style={tagStyle}>
      <Icon name={icon} size={icons[size]} color={colors.primary} />
      <Text style={[styles.tagText, font[size]]}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start'
  },
  tagText: {
    marginLeft: 4,
    color: colors.primary,
    ...font.semibold
  },
  background: {
    backgroundColor: colors.white,
    padding: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.gray.light
  }
})

export default Tag
