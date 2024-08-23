import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { Link } from 'expo-router'


const FormField = ({title,pwrd=false,innerStyle,otherStyles,leftText,keyboardType,placeholder,handleChangeText,value}) => {
  const[showPassword,setShowPassword] = useState(false)
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      {/* <Text className='text-base text-black font-pmedium'>{title}</Text> */}

      <View className={` w-full h-16 ${innerStyle}  px-4 bg-black-100 rounded-2xl bg-white-100 focus:border-black items-center flex-row`}>
        <TextInput
          className='  flex-1 text-black font-psemibold text-base'
          keyboardType={keyboardType}
          onChangeText={handleChangeText}
          value={value}
          placeholder={placeholder}
          secureTextEntry={title==='Password' && !showPassword}
        />

        
        {title==='Password'&&(<TouchableOpacity
          onPress={()=>{setShowPassword(!showPassword)}}>
            
           {/* {pwrd?<Image
          className='w-6 h-6'
          source={!showPassword? icons.eye : icons.eyehide}
          resizeMode='contain'
          />: ''} */}
          
          <Link href={'/forgotPassword'} className='text-primary-200'>
            {leftText}
          </Link>
        </TouchableOpacity>)}

      </View>

    </View>
  )
}

export default FormField