import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Linking } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Card from '../../components/Card'
import TextPair from '../../components/TextPair'
import { colors, font, icons } from '../../styles'
import CompanyLogo from '../../components/CompanyLogo'

const CompanyResult = ({ title, image, website, availableJobs, onPress }) => {
  return (
    <Card withShadow style={styles.card}>
      <TouchableOpacity style={styles.touchable} onPress={onPress}>
        <CompanyLogo uri={image} size={56} style={styles.logo} />
        <Text style={styles.title}>{title}</Text>
        <Icon name="caret-right" size={icons.lg} color={colors.primary} />
      </TouchableOpacity>
      <View style={styles.content}>
        <TextPair
          label="Website"
          text={website}
          onPress={() => Linking.openUrl(website)}
          numberOfLines={1}
        />
        <TextPair label="Jobs" text={availableJobs} size="xl" align="right" numberOfLines={1} />
      </View>
    </Card>
  )
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 16
  },
  touchable: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: colors.gray.light,
    marginTop: 16,
    paddingTop: 16
  },
  title: {
    ...font.lg,
    ...font.semibold,
    flex: 1
  },
  logo: {
    borderRadius: 8,
    marginRight: 16
  }
})

export default CompanyResult
