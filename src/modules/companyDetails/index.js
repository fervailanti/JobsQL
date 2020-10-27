import React from 'react'
import { Text, FlatList } from 'react-native'
import CompanySummary from './CompannySummary'
import JobResult from './JobResult'
import { font } from '../../styles'
import Empty from '../../components/Empty'
import B from '../../components/Bold'

const CompanyDetails = ({ route, navigation }) => {
  const { slug, name, jobs, logoUrl, websiteUrl, twitter } = route.params.company

  const renderJob = ({ item }) => {
    const jobPress = () => {
      navigation.navigate('jobDetails', {
        companySlug: slug,
        jobSlug: item.slug
      })
    }
    return <JobResult job={item} onJobPress={jobPress} />
  }

  const listHeader = (
    <>
      <CompanySummary company={{ name, logoUrl, websiteUrl, twitter }} />
      <Text style={{ ...font.sm, marginTop: 16 }}>
        <B>{name}</B> is hiring:
      </Text>
    </>
  )

  const listEmpty = <Empty message={`${name} does not have active job searches at this time`} />

  return (
    <FlatList
      data={jobs}
      renderItem={renderJob}
      keyExtractor={(_, index) => index.toString()}
      contentContainerStyle={{ padding: 16 }}
      ListHeaderComponent={listHeader}
      ListHeaderComponentStyle={{ marginBottom: 16 }}
      ListEmptyComponent={listEmpty}
    />
  )
}

export default CompanyDetails
