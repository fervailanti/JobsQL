import React from 'react'
import { Image, StyleSheet } from 'react-native'

const CompanyLogo = ({ uri, size, style }) => {
  const styles = StyleSheet.create({
    height: size,
    width: size,
    ...style
  })
  const defaultIcon =
    'https://i7.uihere.com/icons/278/935/752/enterprise-728e7e7385eb958d36f8c27091677cc5.png'

  const fixedUri = !!uri ? uri : defaultIcon
  return <Image source={{ uri: fixedUri }} style={styles} />
}

export default CompanyLogo
