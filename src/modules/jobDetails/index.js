import React, { useContext } from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import { useQuery } from '@apollo/client'
import { GET } from '../../utils/queries'
import Loader from '../../components/Loader'
import Markdown from '../../components/Markdown'
import Accordion from '../../components/Accordion'
import JobSummary from './jobSummary'
import Error from '../../components/Error'
import Button from '../../components/Button'
import { FavoriteJobsContext } from '../../providers/favoriteJobs'

const JobDetails = ({ route, navigation }) => {
  const { jobSlug, companySlug } = route.params
  const { data, loading, error } = useQuery(GET.JOB(companySlug, jobSlug))
  const [, dispatch, isFavorite] = useContext(FavoriteJobsContext)

  if (loading) return <Loader />
  if (error) return <Error message={error.message} />

  const { job } = data

  return (
    <ScrollView style={styles.scrollview} contentInsetAdjustmentBehavior="always">
      <JobSummary job={job} />
      <View style={styles.buttons}>
        <Button
          text="Apply"
          icon="send"
          type="lite"
          alignSelf="flex-start"
          shadowEnabled={false}
          onPress={() => navigation.navigate('jobApply', { job })}
        />
        <Button
          text={isFavorite(job) ? 'Remove Favorite' : 'Add Favorite'}
          icon={isFavorite(job) ? 'star' : 'star-o'}
          type="lite"
          alignSelf="flex-start"
          shadowEnabled={false}
          onPress={() => dispatch({ type: 'handleFavorite', job })}
        />
      </View>
      <Accordion title="Description">
        <Markdown>{job.description}</Markdown>
      </Accordion>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollview: { padding: 16 },
  buttons: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-evenly'
  }
})

export default JobDetails
