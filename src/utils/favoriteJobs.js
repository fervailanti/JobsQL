export const isFavoriteJob = (state, job) => state.some((e) => e.id === job.id)

export const addJob = (state, job) => [...state, job]

export const removeJob = (state, job) => state.filter((e) => e.id !== job.id)
