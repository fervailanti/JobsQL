import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { colors, font, icons } from '../../styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import Card from '../../components/Card'
import Tag from '../../components/Tag'
import { getFlag } from '../../utils/getFlag'

const JobResult = ({ job, onJobPress }) => {
  const { title, remotes, commitment, cities } = job
  const isRemote = !!remotes.length

  const locations = cities.map((city, index) => {
    const { name, country } = city
    return (
      <Text style={styles.location} key={index}>
        {name}, {country.name} {getFlag(country.isoCode)}
      </Text>
    )
  })

  const additional = (
    <View style={styles.additional}>
      <Tag
        icon={isRemote ? 'earth' : 'flag'}
        text={isRemote ? 'Remote' : 'On site'}
        style={styles.tag}
      />
      <Tag icon="clock" text={commitment.title} style={styles.tag} />
    </View>
  )

  return (
    <Card withShadow style={styles.card} onPress={onJobPress}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        {locations}
        {additional}
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
  content: {
    flex: 1
  },
  title: {
    ...font.lg,
    ...font.semibold,
    marginRight: 8
  },
  location: {
    ...font.sm,
    color: colors.gray.dark,
    marginTop: 6
  },
  additional: {
    flexDirection: 'column',
    marginTop: 4
  },
  tag: {
    marginTop: 6
  }
})

export default JobResult
