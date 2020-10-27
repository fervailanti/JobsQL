import React, { useContext } from 'react'
import { Text, FlatList, StyleSheet } from 'react-native'
import FavJobResult from './FavJobResult'
import { colors, font } from '../../styles'
import Empty from '../../components/Empty'
import { FavoriteJobsContext } from '../../providers/favoriteJobs'

const FavoriteJobs = ({ navigation }) => {
  const [favoriteJobs] = useContext(FavoriteJobsContext)

  const renderFavJob = ({ item }) => {
    const onFavJobPress = () => {
      navigation.navigate('jobDetails', {
        companySlug: item.company.slug,
        jobSlug: item.slug
      })
    }
    return <FavJobResult job={item} onPress={onFavJobPress} />
  }

  const listHeader = <Text style={styles.title}>Stored jobs</Text>

  const listEmpty = (
    <Empty icon="island" title="Hey there!" message="You favorite jobs list is empty" />
  )

  return (
    <FlatList
      data={favoriteJobs}
      renderItem={renderFavJob}
      contentContainerStyle={styles.list}
      ListHeaderComponent={listHeader}
      ListEmptyComponent={listEmpty}
    />
  )
}

const styles = StyleSheet.create({
  title: {
    ...font['2xl'],
    ...font.bold,
    color: colors.black,
    marginBottom: 16
  },
  list: { padding: 16 }
})

export default FavoriteJobs
