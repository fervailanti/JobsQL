import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { colors, font, icons } from '../styles'
import Icon from 'react-native-vector-icons/Fontisto'

const Error = ({ message }) => (
  <View style={styles.container}>
    <Icon name="broken-link" size={icons['3xl']} color={colors.primary} />
    <Text style={styles.title}>Oops!</Text>
    <Text style={styles.subtitle}>Something went wrong</Text>
    {message && <Text style={styles.message}>{message}</Text>}
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
  subtitle: {
    ...font.lg,
    marginTop: 4
  },
  message: {
    ...font.lg,
    textAlign: 'center',
    color: colors.gray.dark,
    marginTop: 8
  }
})

export default Error
