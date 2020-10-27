import React, { useContext } from 'react'
import { Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { colors, font, icons } from '../styles'
import { FavoriteJobsContext } from '../providers/favoriteJobs'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome'

const HeaderFavsIcon = () => {
  const { navigate } = useNavigation()
  const [favoriteJobs] = useContext(FavoriteJobsContext)
  return (
    <TouchableOpacity onPress={() => navigate('favoriteJobs')} style={styles.container}>
      <Text style={styles.counter}>{favoriteJobs.length}</Text>
      <Icon name="star" size={icons.lg} color="white" />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  counter: {
    ...font.lg,
    ...font.bold,
    color: colors.white,
    marginRight: 8
  }
})

export default HeaderFavsIcon
