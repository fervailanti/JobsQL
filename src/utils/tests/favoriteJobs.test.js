import { addJob, removeJob, isFavoriteJob } from '../favoriteJobs'

describe('Should resolve methods for favoriteJobs utils correctly', () => {
  it.each([
    // ADD JOB - CASE 1
    [
      // Initial list:
      [{ id: 'test1' }, { id: 'test2' }],
      // New element:
      { id: 'test3' },
      // Final list:
      [{ id: 'test1' }, { id: 'test2' }, { id: 'test3' }]
    ],
    // ADD JOB - CASE 2
    [
      // Initial list:
      [],
      // New element:
      { id: 'test99' },
      // Final list:
      [{ id: 'test99' }]
    ]
  ])('addJob should return a new array with new element added', (initial, newElement, final) => {
    expect(addJob(initial, newElement)).toEqual(final)
  })

  it.each([
    // REMOVE JOB - CASE 1
    [
      // Initial list:
      [{ id: 'test1' }, { id: 'test2' }],
      // New element:
      { id: 'test2' },
      // Final list:
      [{ id: 'test1' }]
    ],
    // REMOVE JOB - CASE 2
    [
      // Initial list:
      [{ id: 'test1' }, { id: 'test2' }],
      // New element:
      { id: 'test99' },
      // Final list:
      [{ id: 'test1' }, { id: 'test2' }]
    ]
  ])('removeJob should return a new array with new element removed', (initial, removing, final) => {
    expect(removeJob(initial, removing)).toEqual(final)
  })

  it.each([
    // IS FAVORITE JOB - CASE 1
    [
      // Jobs list:
      [{ id: 'test1' }, { id: 'test2' }],
      // Checking:
      { id: 'test2' },
      // Is favorite:
      true
    ],
    // IS FAVORITE JOB - CASE 2
    [
      // Jobs list:
      [{ id: 'test1' }, { id: 'test2' }],
      // Checking:
      { id: 'test99' },
      // Is favorite:
      false
    ]
  ])(
    'isFavorite should check by id if given job is already in favorites list',
    (jobsList, checking, value) => {
      expect(isFavoriteJob(jobsList, checking)).toEqual(value)
    }
  )
})
