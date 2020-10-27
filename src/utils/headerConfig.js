import React from 'react'
import { Platform } from 'react-native'
import { colors, font, icons, shadow } from '../styles'
import HeaderFavsIcon from '../components/HeaderFavsIcon'
import Icon from 'react-native-vector-icons/FontAwesome'

const marginBottom = Platform.OS === 'ios' ? 6 : 0

export const headerConfig = {
  headerStyle: {
    backgroundColor: colors.primary,
    ...shadow
  },
  headerTitleStyle: {
    marginBottom: marginBottom,
    ...font.lg,
    ...font.semibold
  },
  headerRightContainerStyle: {
    marginHorizontal: 16,
    marginBottom: marginBottom
  },
  headerLeftContainerStyle: {
    marginHorizontal: 16,
    marginBottom: marginBottom
  },
  headerTintColor: colors.white,
  headerBackTitleVisible: false,
  headerBackImage: ({ tintColor }) => <Icon name="arrow-left" size={icons.md} color={tintColor} />,
  headerRight: () => <HeaderFavsIcon />
}
