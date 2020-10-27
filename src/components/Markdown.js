import React from 'react'
import { MarkdownView } from 'react-native-markdown-view'
import { StyleSheet } from 'react-native'
import { font, colors } from '../styles'

const Markdown = ({ styles, children }) => (
  <MarkdownView styles={{ ...markdownStyles, ...styles }}>{children}</MarkdownView>
)

const markdownStyles = StyleSheet.create({
  heading1: {
    ...font.xl,
    ...font.bold
  },
  heading2: {
    ...font.lg,
    ...font.bold
  },
  heading3: {
    ...font.lg,
    ...font.semibold
  },
  heading4: {
    ...font.md,
    ...font.bold
  },
  heading5: {
    ...font.md,
    ...font.semibold
  },
  heading6: {
    ...font.sm,
    ...font.bold
  },
  listItemBullet: { fontSize: 32 },
  listItem: { marginVertical: 8 },
  listItemUnorderedContent: font.sm,
  listItemOrderedContent: font.sm,
  strong: font.bold,
  link: { color: colors.primary },
  paragraph: { ...font.sm, lineHeight: 24 }
})

export default Markdown
