import { View, Image,Text, ScrollView,Alert, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView, useSafeAreaFrame } from 'react-native-safe-area-context'


import FormField from '../components/FormField'


import { Link, router } from 'expo-router'
import CustomButton from '../components/CustomButton'
import images from '../../assets/images'



const VerifyCode = () => {

  const[form,setForm] = useState({
    email: '',
    password: '',
  
  })

  const [isSubmitting, setIsSubmitting] = useState(true)


  const submit=async()=>{
   if(!form.email || !form.password ){
      Alert.alert('Error','Please Check Your Inputs')
      return
    }
    setIsSubmitting(true)
    try{
        
      await SignInAccount(form.email,form.password)

      //globat state ..wtf
      router.replace("/home")

    }catch(error){
      Alert.alert('Error',error.message)
    }finally{
      setIsSubmitting(false)
    }

  }
  
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <Text className='px-6 mt-6 items-start font-bold text-xl'> Farmer Eats</Text>
       
        <View className='w-full justify-center  min-h-[53vh]  px-6 my-6'>
          <Text className='text-4xl  mt-10 font-bold  text-black'>Verify OTP</Text>
          <View  className='items-center  mt-5 flex-row '>
          <Text className='text-black text-base font-pregular' >Remember Your Password?</Text>
          <Link className='text-secondary text-primary-200 text-base font-psemibold' href={'/sign-in'}> Login </Link>
        </View>
        
        {/* <FormField 
          title='Phone Number'
          value={form.email}
          handleChangeText={(e)=>setForm({
            ...form, email:e
          })}
          placeholder={'Phone Number'}
          otherStyles='mt-[70px]'
        //   keyboardType={}
        /> */}
        <View className=' flex-row gap-2 justify-evenly mt-10'>
            <View className='w-[60px] h-[60px] rounded-[10px] bg-white-100 justify-center items-center'>
                <TextInput className='text-center justify-center items-center text-lg'
                maxLength={1}
                keyboardType={'number-pad'}
                >
                </TextInput>
            </View>
            <View className='w-[60px] h-[60px] rounded-[10px] bg-white-100 justify-center items-center'>
                <TextInput className='text-center justify-center items-center text-lg'
                maxLength={1}
                keyboardType={'number-pad'}
                >
                </TextInput>
            </View>
            <View className='w-[60px] h-[60px] rounded-[10px] bg-white-100 justify-center items-center'>
                <TextInput className='text-center justify-center items-center text-lg'
                maxLength={1}
                keyboardType={'number-pad'}
                >
                </TextInput>
            </View>
            <View className='w-[60px] h-[60px] rounded-[10px] bg-white-100 justify-center items-center'>
                <TextInput className='text-center justify-center items-center text-lg'
                maxLength={1}
                keyboardType={'number-pad'}
                >
                </TextInput>
            </View>
            <View className='w-[60px] h-[60px] rounded-[10px] bg-white-100 justify-center items-center'>
                <TextInput className='text-center justify-center items-center text-lg'
                maxLength={1}
                keyboardType={'number-pad'}
                >
                </TextInput>
            </View>
            
      
        </View>
        {/* <CustomButton 
          title='Sign In' 
          handlePress={submit}
          containerStyles='mt-7'
          isLoading={isSubmitting}
        /> */}
        {/* <View  className='items-center justify-center mt-5 flex-row '>
          <Text className='text-black text-base font-pregular' >Don't have an Account?</Text>
          <Link className='text-secondary text-base font-psemibold' href={'/sign-up'}> Sign-Up </Link>
        </View> */}
        <CustomButton 
          title={'Submit'}
          handlePress={()=>router.push('/ResetPass')}
        />
        <Text className='text-center mt-5 mb-10 text-black underline text-base'>Resend Code</Text>
        {/* 
          <View className='mt-10  flex-row justify-evenly gap-2'>
            <View className='w-[100px] h-[50px] rounded-[50px] border-[1px] border-gray-100  items-center justify-center'>
              <Image
              source={images.google}
              />
            </View>
            <View className='w-[100px] h-[50px] rounded-[50px] border-[1px] border-gray-100  items-center justify-center'>
              <Image
              source={images.apple}
              />
            </View>
            <View className='w-[100px] h-[50px] rounded-[50px] border-[1px] border-gray-100  items-center justify-center'>
              <Image
              source={images.facebook}
              />
            </View>
            
          </View> */}
        </View>   
      </ScrollView>
    </SafeAreaView>
  )
}

export default VerifyCode