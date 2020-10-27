import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { headerConfig } from '../utils/headerConfig'
import CompaniesResults from '../modules/companiesResults'
import CompanyDetails from '../modules/companyDetails'
import JobDetails from '../modules/jobDetails'
import FavoriteJobs from '../modules/favoriteJobs'
import JobApply from '../modules/jobApply'
import SendJobApply from '../modules/jobApply/SendJobApply'

const { Navigator, Screen } = createStackNavigator()

const Navigation = () => (
  <NavigationContainer>
    <Navigator screenOptions={{ ...TransitionPresets.SlideFromRightIOS }}>
      <Screen
        name="companiesResults"
        component={CompaniesResults}
        options={{ title: 'Companies', ...headerConfig }}
      />
      <Screen
        name="companyDetails"
        component={CompanyDetails}
        options={({ route }) => {
          const { name } = route.params.company
          return { title: name, ...headerConfig }
        }}
      />
      <Screen
        name="jobDetails"
        component={JobDetails}
        options={{ title: 'Job', ...headerConfig }}
      />
      <Screen
        name="favoriteJobs"
        component={FavoriteJobs}
        options={{ title: 'Favorites', ...headerConfig }}
      />
      <Screen
        name="jobApply"
        component={JobApply}
        options={{ title: 'Job Apply', ...headerConfig }}
      />
      <Screen name="sendJobApply" component={SendJobApply} options={{ headerShown: false }} />
    </Navigator>
  </NavigationContainer>
)

export default Navigation
