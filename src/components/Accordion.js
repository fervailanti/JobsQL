import React, { useState } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { colors, font, icons } from '../styles'
import Card from './Card'

const Accordion = ({ title, children }) => {
  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true)
  }

  const [isExpanded, setIsExpanded] = useState(false)

  const toggleContent = () => {
    LayoutAnimation.configureNext(LayoutAnimation.create(300, 'easeInEaseOut', 'opacity'))
    setIsExpanded(!isExpanded)
  }

  return (
    <Card outlined style={{ padding: 0 }}>
      <TouchableOpacity style={styles.header} onPress={toggleContent}>
        <Text style={styles.title}>{title}</Text>
        <Icon
          name={isExpanded ? 'caret-up' : 'caret-down'}
          color={colors.primary}
          size={icons.lg}
        />
      </TouchableOpacity>
      {isExpanded && <View style={styles.content}>{children}</View>}
    </Card>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 16,
    borderColor: colors.gray.light,
    borderWidth: 1,
    marginBottom: 32
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16
  },
  title: {
    ...font.lg,
    ...font.bold
  },
  content: {
    marginHorizontal: 16,
    paddingVertical: 4,
    borderTopWidth: 1,
    borderTopColor: colors.gray.light
  }
})

export default Accordion
