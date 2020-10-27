import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import CompanyLogo from '../../components/CompanyLogo'
import Icon from 'react-native-vector-icons/FontAwesome'
import Card from '../../components/Card'
import Tag from '../../components/Tag'
import B from '../../components/Bold'
import { colors, font, icons } from '../../styles'
import { getFlag } from '../../utils/getFlag'

const FavJobResult = ({ job, onPress }) => {
  const isRemote = !!job.remotes.length
  return (
    <Card withShadow style={styles.card} onPress={onPress}>
      <View style={styles.main}>
        <View style={styles.company}>
          <CompanyLogo uri={job.company.logoUrl} size={22} style={styles.logo} />
          <Text style={styles.companyName}>
            by <B>{job.company.name}</B>
          </Text>
        </View>
        <Text style={styles.title}>{job.title}</Text>
        {job.cities.map(({ name, country }, index) => (
          <Text key={index} style={styles.location}>
            {name}, {country.name} {getFlag(country.isoCode)}
          </Text>
        ))}
        <Tag
          icon={isRemote ? 'earth' : 'flag'}
          text={isRemote ? 'Remote' : 'On site'}
          style={styles.tag}
        />
      </View>
      <Icon name="caret-right" size={icons.lg} color={colors.primary} />
    </Card>
  )
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center'
  },
  company: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  logo: {
    marginRight: 4,
    borderRadius: 8
  },
  title: {
    flex: 1,
    marginTop: 8,
    ...font.lg,
    ...font.bold
  },
  main: { flex: 1 },
  companyName: font.sm,
  location: { marginTop: 8 },
  tag: { marginTop: 8 }
})

export default FavJobResult
