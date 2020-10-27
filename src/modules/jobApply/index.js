import React from 'react'
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Platform
} from 'react-native'
import Button from '../../components/Button'
import FormHeader from './FormHeader'
import JobApplyForm from './JobApplyForm'
import { useForm } from 'react-hook-form'

const JobApply = ({ route, navigation }) => {
  const { handleSubmit, control, errors } = useForm()
  const { job } = route.params
  const sendPress = (data) => {
    navigation.navigate('sendJobApply', { job, applyData: data })
  }
  return (
    <TouchableWithoutFeedback style={styles.flex} onPress={Keyboard.dismiss}>
      <>
        <ScrollView style={styles.flex}>
          <View style={styles.form}>
            <FormHeader job={job} />
            <JobApplyForm control={control} errors={errors} />
          </View>
        </ScrollView>
        <Button icon="send" text="Send" style={styles.button} onPress={handleSubmit(sendPress)} />
      </>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  form: { padding: 16 },
  button: {
    marginTop: 16,
    marginHorizontal: 16,
    marginBottom: Platform.OS === 'ios' ? 32 : 16
  }
})

export default JobApply
