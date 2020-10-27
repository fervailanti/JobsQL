import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Button from '../../components/Button'
import Loader from '../../components/Loader'
import { colors, font } from '../../styles'
import B from '../../components/Bold'

const SendJobApply = ({ route, navigation }) => {
  const { job, applyData } = route.params
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    console.log(applyData)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  const successful = (
    <>
      <Icon name="award" size={96} color={colors.white} />
      <Text style={styles.message}>
        Your application to <B>{job.company.name}</B> for the position of <B>{job.title}</B> has
        been submitted successfully
      </Text>
      <Button
        shadowEnabled={false}
        icon="reply"
        type="ghost"
        text="Back"
        onPress={() => navigation.navigate('companiesResults')}
        style={styles.button}
      />
    </>
  )

  return (
    <View style={styles.container}>{isLoading ? <Loader color={colors.white} /> : successful}</View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32
  },
  message: {
    color: colors.white,
    ...font.lg,
    textAlign: 'center',
    marginTop: 16
  },
  button: { marginTop: 32 }
})

export default SendJobApply
