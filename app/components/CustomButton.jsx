import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({title, handlePress, containerStyles,textStyles }) => {
  return (
    <TouchableOpacity className={`bg-primary-200 mt-10 rounded-[50px] min-h-[50px] items-center justify-center  p-3 ${containerStyles} `} 
        onPress={handlePress}
        // disabled={isLoading}
        activeOpacity={0.7}
        // style={[containerStyle, isLoading && {opacity: 0.5}]}
  
    
    >
      <Text className={`text-white text-lg ${textStyles}`}>{title}</Text>
      
    </TouchableOpacity>
  )
}

export default CustomButton