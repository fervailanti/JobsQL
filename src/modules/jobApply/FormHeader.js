import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors, font } from '../../styles'
import CompanyLogo from '../../components/CompanyLogo'
import B from '../../components/Bold'

const FormHeader = ({ job }) => {
  return (
    <View>
      <View style={styles.company}>
        <CompanyLogo uri={job.company.logoUrl} size={22} style={styles.logo} />
        <Text style={styles.companyName}>
          by <B>{job.company.name}</B>
        </Text>
      </View>
      <Text style={styles.title}>{job.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  company: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8
  },
  logo: {
    borderRadius: 8,
    marginRight: 4
  },
  companyName: {
    ...font.sm,
    color: colors.black
  },
  title: {
    ...font['xl'],
    ...font.bold,
    marginBottom: 16
  }
})

export default FormHeader
