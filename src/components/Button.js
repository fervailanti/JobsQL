import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { colors, font, icons, shadow } from '../styles'
import Icon from 'react-native-vector-icons/FontAwesome'

const Button = ({
  text,
  icon,
  style,
  onPress,
  type = 'primary',
  alignSelf = 'auto',
  shadowEnabled = true
}) => {
  const theme = {
    primary: {
      background: colors.primary,
      text: colors.white,
      icon: colors.white
    },
    ghost: {
      background: colors.white,
      text: colors.primary,
      icon: colors.primary
    },
    lite: {
      text: colors.black,
      icon: colors.primary
    }
  }

  const styles = StyleSheet.create({
    button: {
      backgroundColor: theme[type].background,
      borderRadius: 16,
      padding: 16,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16,
      alignSelf: alignSelf,
      ...style
    },
    text: {
      ...font.bold,
      ...font.md,
      color: theme[type].text
    },
    icon: {
      marginRight: text ? 8 : 0,
      color: theme[type].icon
    }
  })

  return (
    <TouchableOpacity style={[styles.button, shadowEnabled && shadow]} onPress={onPress}>
      {icon && <Icon name={icon} size={icons.lg} style={styles.icon} />}
      {text && <Text style={styles.text}>{text}</Text>}
    </TouchableOpacity>
  )
}

export default Button
