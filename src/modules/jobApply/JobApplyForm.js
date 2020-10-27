import React from 'react'
import { View, StyleSheet } from 'react-native'
import InputText from '../../components/InputText'
import { EMAIL_REGEX } from '../../utils/emailRegex'

const JobApplyForm = ({ control, errors }) => {
  return (
    <View>
      <InputText
        errors={errors}
        control={control}
        name="fullName"
        label="Full Name"
        placeholder="Andrew Stockdale"
        inputProps={{
          autoCapitalize: 'words',
          autoCompleteType: 'name',
          returnKeyType: 'done',
          textContentType: 'name'
        }}
        rules={{
          required: { value: true, message: 'Full name is required' }
        }}
      />
      <InputText
        errors={errors}
        control={control}
        name="email"
        label="Email"
        placeholder="adrewstockdale@example.com"
        inputProps={{
          autoCapitalize: 'none',
          autoCompleteType: 'email',
          keyboardType: 'email-address',
          returnKeyType: 'done',
          textContentType: 'emailAddress'
        }}
        rules={{
          required: { value: true, message: 'Email is required' },
          pattern: { value: EMAIL_REGEX, message: 'Invalid email' }
        }}
      />
      <InputText
        errors={errors}
        control={control}
        name="address"
        label="Address"
        placeholder="Lincoln 45, New York, USA"
        inputProps={{
          autoCompleteType: 'street-address',
          returnKeyType: 'done',
          textContentType: 'fullStreetAddress'
        }}
        rules={{
          required: { value: true, message: 'Address is required' }
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default JobApplyForm
