import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { colors, font, icons } from '../styles'
import Icon from 'react-native-vector-icons/Fontisto'

const Empty = ({ icon = 'persons', title = 'Oops!', message }) => (
  <View style={styles.container}>
    <Icon name={icon} size={icons['3xl']} color={colors.primary} />
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.message}>{message}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32
  },
  title: {
    ...font.lg,
    ...font.bold,
    marginTop: 20
  },
  message: {
    ...font.md,
    textAlign: 'center',
    color: colors.gray.dark,
    marginTop: 8
  }
})

export default Empty
