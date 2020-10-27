import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { font } from '../../../styles'
import { getFlag } from '../../../utils/getFlag'

const JobLocations = ({ cities }) => (
  <View style={styles.locationsContainer}>
    {cities.map(({ name, country }, index) => (
      <Text key={index} style={styles.location}>
        {name}, {country.name} {getFlag(country.isoCode)}
      </Text>
    ))}
  </View>
)

const styles = StyleSheet.create({
  locationsContainer: {
    marginBottom: 12
  },
  location: {
    ...font.md,
    ...font.bold,
    marginBottom: 4
  }
})

export default JobLocations
