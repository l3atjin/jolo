import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'

interface Props {
  text: string
  onPress: () => void
  type: 'primary' | 'secondary'
}

/**
 * Jolo standard button, primary and secondary
 */
export const Button: React.FC<Props> = ({ text, onPress, type }) => {
  return (
    <Pressable
      style={[
        styles.button,
        type === 'primary' ? styles.primary : styles.secondary
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.text,
          type === 'primary' ? styles.textPrimary : styles.textSecondary
        ]}
      >
        {text}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3
  },
  primary: {
    backgroundColor: '#05518E'
  },
  secondary: {
    backgroundColor: 'white',
    borderColor: '#05518E'
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25
  },
  textPrimary: {
    color: 'white'
  },
  textSecondary: {
    color: 'black'
  }
})
