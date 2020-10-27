import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { colors, font } from '../styles'
import Icon from 'react-native-vector-icons/Fontisto'

const Brand = ({ full, style }) => (
  <View style={[styles.container, style]}>
    <Icon name="graphql" size={64} color={colors.primary} style={styles.icon} />
    <Text style={styles.title}>JobsQL</Text>
    {full && (
      <Text style={styles.subtitle}>
        Work with <Text style={styles.blackText}>GraphQL</Text> in a modern startup.
      </Text>
    )}
  </View>
)

const styles = StyleSheet.create({
  container: { marginBottom: 16 },
  icon: {
    alignSelf: 'center',
    paddingBottom: 4
  },
  title: {
    ...font['3xl'],
    ...font.bold,
    alignSelf: 'center'
  },
  subtitle: {
    ...font.md,
    ...font.bold,
    alignSelf: 'center',
    color: colors.gray.dark,
    marginVertical: 8
  },
  blackText: { color: colors.black }
})

export default Brand
