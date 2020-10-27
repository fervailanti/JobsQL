import React from 'react'
import { Text } from 'react-native'
import { font } from '../styles'

const B = ({ children }) => <Text style={font.bold}>{children}</Text>

export default B
