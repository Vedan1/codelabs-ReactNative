import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import images from '../../assets/images'

const CustomBottom = ({title, handlePress, containerStyles,textStyles,back=false }) => {
  return (
    <View className='flex-row items-center text-center justify-between mt-10'>
    
    {back?<Text className='items-center justify-center text-lg font-bold underline'> Login</Text>:<Image source={images.leftArr} />}

    <TouchableOpacity className={`bg-primary-200  w-[226px] rounded-[50px] min-h-[50px] items-center justify-center  p-3 ${containerStyles} `} 
        onPress={handlePress}
        // disabled={isLoading}
        activeOpacity={0.7}
        // style={[containerStyle, isLoading && {opacity: 0.5}]}
    >
      <Text className={`text-white text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
    </View>
  )
}

export default CustomBottom