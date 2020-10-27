import { favoritesReducer } from './fovoritesReducer'

it.each([
  // CLEAN FAVORITES ACTION TYPE
  [
    // Initial state:
    [{ id: 11 }, { id: 22 }, { id: 33 }],
    // Action:
    { type: 'cleanFavorites', job: { id: null } },
    // Expected final state:
    []
  ],
  // SET FAVORITES ACTION TYPE
  [
    // Initial state:
    [],
    // Action:
    { type: 'setFavorites', data: [{ id: 3 }, { id: 3 }] },
    // Expected final state:
    [{ id: 3 }, { id: 3 }]
  ],
  // HANDLE FAVORITE ACTION TYPE (NEVER STORED)
  [
    // Initial state:
    [{ id: 44 }],
    // Action:
    { type: 'handleFavorite', job: { id: 15 } },
    // Expected final state:
    [{ id: 44 }, { id: 15 }]
  ],
  // HANDLE FAVORITE ACTION TYPE (ALREADY STORED)
  [
    // Initial state:
    [{ id: 24 }],
    // Action:
    { type: 'handleFavorite', job: { id: 24 } },
    // Expected final state:
    []
  ]
])(
  'Should resolve different actions in favorite jobs reducer',
  (initialState, action, finalState) => {
    expect(favoritesReducer(initialState, action)).toEqual(finalState)
  }
)
