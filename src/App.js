import 'react-native-gesture-handler'
import React, { useEffect } from 'react'
import { StatusBar } from 'react-native'
import { ApolloProvider } from '@apollo/client'
import { client } from './utils/apolloClient'
import Navigation from './components/Navigation'
import FavoritesProvider from './providers/favoriteJobs'
import { colors } from './styles'
import SplashScreen from 'react-native-splash-screen'

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])
  return (
    <ApolloProvider client={client}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <FavoritesProvider>
        <Navigation />
      </FavoritesProvider>
    </ApolloProvider>
  )
}

export default App
