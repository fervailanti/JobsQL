import React from 'react'
import { StyleSheet, View } from 'react-native'
import Tag from '../../../components/Tag'

const JobHashtags = ({ tags }) => (
  <View style={styles.tagsContainer}>
    {tags.map((tag, index) => (
      <Tag withBackground icon="hashtag" text={tag.name} style={styles.tag} key={index} />
    ))}
  </View>
)

const styles = StyleSheet.create({
  tagsContainer: {
    flexDirection: 'row',
    marginBottom: 12,
    flexWrap: 'wrap'
  },
  tag: {
    marginRight: 4,
    marginBottom: 4
  }
})

export default JobHashtags
