import { addJob, removeJob, isFavoriteJob } from '../../utils/favoriteJobs'

export const favoritesReducer = (state, { type, data, job }) => {
  const actions = {
    cleanFavorites: [],
    setFavorites: data,
    handleFavorite: isFavoriteJob(state, job) ? removeJob(state, job) : addJob(state, job)
  }
  return actions[type]
}
