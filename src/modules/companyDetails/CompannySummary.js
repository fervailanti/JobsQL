import React from 'react'
import { View, Linking, StyleSheet } from 'react-native'
import Card from '../../components/Card'
import CompanyLogo from '../../components/CompanyLogo'
import TextPair from '../../components/TextPair'
import { colors } from '../../styles'

const CompannySummary = ({ company }) => {
  const { name, logoUrl, websiteUrl, twitter } = company
  return (
    <Card withShadow style={styles.card}>
      <CompanyLogo uri={logoUrl} size={64} style={styles.logo} />
      <View style={styles.info}>
        <TextPair label="Company" text={name} size="xl" />
        {!!websiteUrl && (
          <TextPair
            label="Website"
            text={websiteUrl}
            onPress={() => Linking.openURL(websiteUrl)}
            containerStyle={{ marginTop: 8 }}
            numberOfLines={1}
          />
        )}
        {!!twitter && (
          <TextPair
            label="Twitter"
            text={`@${twitter}`}
            onPress={() => Linking.openURL(`https://twitter.com/${twitter}`)}
            containerStyle={{ marginTop: 8 }}
            numberOfLines={1}
          />
        )}
      </View>
    </Card>
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  logo: {
    borderRadius: 8
  },
  info: {
    marginLeft: 16,
    paddingLeft: 16,
    borderLeftWidth: 1,
    borderLeftColor: colors.gray.light,
    flex: 1
  }
})

export default CompannySummary
