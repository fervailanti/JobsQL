import React from 'react'
import { StyleSheet, View } from 'react-native'
import Tag from '../../../components/Tag'

const JobAdditionalInfo = ({ isRemote, commitment }) => (
  <View style={styles.additionalInfo}>
    <Tag
      size="sm"
      icon={isRemote ? 'earth' : 'flag'}
      text={isRemote ? 'Remote' : 'On site'}
      style={{ marginRight: 16 }}
    />
    <Tag size="sm" icon="clock" text={commitment} />
  </View>
)

const styles = StyleSheet.create({
  additionalInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16
  }
})

export default JobAdditionalInfo
