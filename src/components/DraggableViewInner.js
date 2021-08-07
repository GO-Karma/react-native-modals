import React from "react"
import { Animated, Platform } from "react-native"
import { useKeyboard } from "@react-native-community/hooks"

const DraggableViewInner = ({ style, content, ...props }) => {
  const keyboard = useKeyboard()

  return (
    <Animated.View
      style={[
        style,
        {
          paddingBottom: (keyboard.keyboardShown && Platform.OS === 'ios') ? keyboard.keyboardHeight : 0,
        },
      ]}
      {...props}
    >
      {content}
    </Animated.View>
  )
}

export default DraggableViewInner
