import React from 'react'
import { FlatList } from 'react-native'
import { useQuery } from '@apollo/client'
import { GET } from '../../utils/queries'
import CompanyResult from './CompanyResult'
import Loader from '../../components/Loader'
import Error from '../../components/Error'
import Brand from '../../components/Brand'

const CompaniesResults = ({ navigation }) => {
  const { loading, error, data } = useQuery(GET.COMPANIES)
  if (loading) return <Loader />
  if (error) return <Error message={error.message} />

  const renderCompany = ({ item }) => (
    <CompanyResult
      title={item.name}
      image={item.logoUrl}
      onPress={() => navigation.navigate('companyDetails', { company: item })}
      website={item.websiteUrl}
      availableJobs={item.jobs.length}
    />
  )

  return (
    <FlatList
      data={data.companies}
      renderItem={renderCompany}
      keyExtractor={(_, index) => index.toString()}
      contentContainerStyle={{ padding: 16 }}
      ListHeaderComponent={<Brand full />}
    />
  )
}

export default CompaniesResults
