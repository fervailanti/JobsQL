import React from 'react'
import { Linking } from 'react-native'
import JobHeading from './Heading'
import JobHashtags from './Hashtags'
import JobLocations from './Locations'
import JobAdditionalInfo from './AdditionalInfo'
import TextPair from '../../../components/TextPair'
import Card from '../../../components/Card'

const JobSummary = ({ job }) => {
  const { company, title, cities, tags, remotes, commitment, applyUrl, userEmail } = job
  return (
    <Card outlined style={{ marginBottom: 16 }}>
      <JobHeading company={company} title={title} />
      {!!tags.length && <JobHashtags tags={tags} />}
      {!!cities.length && <JobLocations cities={cities} />}
      <JobAdditionalInfo isRemote={!!remotes.length} commitment={commitment.title} />
      {!!applyUrl && (
        <TextPair
          label="Apply Website"
          text={applyUrl}
          numberOfLines={1}
          onPress={() => Linking.openURL(applyUrl)}
        />
      )}
      {!!userEmail && (
        <TextPair
          label="Contact Mail"
          text={userEmail}
          numberOfLines={1}
          onPress={() => Linking.openURL(userEmail)}
          containerStyle={{ marginTop: 16 }}
        />
      )}
    </Card>
  )
}

export default JobSummary
