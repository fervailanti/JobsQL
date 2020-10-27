import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { colors, font, shadow } from '../styles'
import { Controller } from 'react-hook-form'
import Icon from 'react-native-vector-icons/FontAwesome'

const InputText = ({
  name,
  label,
  defaultValue = '',
  placeholder,
  control,
  rules,
  errors,
  containerStyle,
  inputStyle,
  inputProps,
  controllerProps
}) => {
  const isError = !!errors[name]
  return (
    <Controller
      name={name}
      defaultValue={defaultValue}
      control={control}
      rules={rules}
      {...controllerProps}
      render={({ onChange, value }) => (
        <View style={[styles.container, containerStyle]}>
          <View style={styles.label}>
            <Text style={styles.labelText}>{label}</Text>
            {isError && (
              <View style={styles.errorLabel}>
                <Text style={styles.errorMessage}>{errors[name].message}</Text>
                <Icon name="asterisk" color={colors.primary} size={12} />
              </View>
            )}
          </View>
          <TextInput
            placeholder={placeholder}
            placeholderTextColor={colors.gray.light}
            style={[styles.input, inputStyle, isError && styles.error]}
            value={value}
            onChangeText={(text) => onChange(text)}
            {...inputProps}
          />
        </View>
      )}
    />
  )
}

const styles = StyleSheet.create({
  container: { marginBottom: 8 },
  label: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  labelText: {
    ...font.sm,
    ...font.bold,
    color: colors.gray.mid,
    marginRight: 8
  },
  input: {
    backgroundColor: colors.white,
    ...shadow,
    ...font.md,
    borderRadius: 16,
    padding: 16,
    marginTop: 8,
    color: colors.black,
    borderColor: 'transparent',
    borderWidth: 1
  },
  error: { borderColor: colors.error },
  errorLabel: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  errorMessage: {
    color: colors.primary,
    marginRight: 4,
    ...font.xs,
    ...font.bold
  }
})

export default InputText
