import React from 'react'
import { ActivityIndicator } from 'react-native'
import { colors } from '../styles'

const Loader = ({ size = 'large', color = colors.primary }) => (
  <ActivityIndicator size={size} color={color} style={{ flex: 1 }} />
)

export default Loader
