import React, { useEffect, createContext, useReducer } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { favoritesReducer } from './fovoritesReducer'
import { isFavoriteJob } from '../../utils/favoriteJobs'

const STORAGE_KEY = 'favorite_jobs'

export const FavoriteJobsContext = createContext()

const getFavorites = async () => {
  try {
    const favorites = await AsyncStorage.getItem(STORAGE_KEY)
    return favorites ? JSON.parse(favorites) : []
  } catch (e) {
    console.log('Failed to fetch favorite jobs from storage')
  }
}

const FavoritesProvider = ({ children }) => {
  const [favoriteJobs, dispatch] = useReducer(favoritesReducer, [])

  useEffect(() => {
    const fetchFavorites = async () => {
      const favorites = await getFavorites()
      dispatch({ type: 'setFavorites', data: favorites })
    }
    fetchFavorites()
  }, [])

  useEffect(() => {
    if (favoriteJobs) {
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(favoriteJobs))
    }
  }, [favoriteJobs])

  const isFavorite = (job) => isFavoriteJob(favoriteJobs, job)

  return (
    <FavoriteJobsContext.Provider value={[favoriteJobs, dispatch, isFavorite]}>
      {children}
    </FavoriteJobsContext.Provider>
  )
}

export default FavoritesProvider
