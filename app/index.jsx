import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, router, Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import images from '../assets/images'

const index = () => {
  return (
    
    <SafeAreaView className='flex-1 bg-primary-100 h-full'>
        <ScrollView contentContainerStyle={{height:"100%"}}>
            <View className='w-full justify-center items-center  mt-10'>
                <Image 
                    source={images.onBoarding3}
                    className='w-full justify-start'
                    resizeMode='cover'
                />
                
                <StatusBar style='auto' />
                <View  className='bg-white min-w-full h-[500px] rounded-[50px] mt-10 p-4'>
                    <View  className='justify-center items-center'>
                        <Text className='font-bold text-[24px] mt-3'>
                            Quality
                        </Text>
                        <Text className=' w-[300px] text-center text-[14px] mt-10 '>
                        Sell your farm fresh products directly to consumers, cutting out the middleman and reducing emissions of the global supply chain. </Text>
                        <Text className='text-3xl mt-5'>...</Text>
                        <TouchableOpacity className='w-[250px] h-[50px] items-center justify-center bg-primary-100 rounded-[30px] mt-[50px]'>
                            <Text className='text-[18px] font-bold text-white'>Join The Movement</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity 
                            onPress={()=>{router.push('/sign-in');console.log("Button Pressed")}}
                        > 
                        <Text className='font-semibold text-[14px] underline mt-10'>Login</Text> 
                        
                        </TouchableOpacity>
                        
                    </View>
                </View>
        </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default index

