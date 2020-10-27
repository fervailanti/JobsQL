import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { font } from '../../../styles'
import CompanyLogo from '../../../components/CompanyLogo'
import B from '../../../components/Bold'

const JobHeading = ({ company, title }) => (
  <>
    <View style={styles.company}>
      <CompanyLogo uri={company.logoUrl} size={22} style={styles.logo} />
      <Text style={font.sm}>
        <B>{company.name}</B> is hiring:
      </Text>
    </View>
    <View style={styles.heading}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </>
)

const styles = StyleSheet.create({
  company: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16
  },
  logo: {
    borderRadius: 8,
    marginRight: 4
  },
  heading: {
    flexDirection: 'row',
    marginBottom: 16
  },
  title: {
    ...font['2xl'],
    ...font.bold,
    flex: 1
  }
})

export default JobHeading
