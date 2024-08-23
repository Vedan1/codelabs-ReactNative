import { View, Image,Text, ScrollView,Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView, useSafeAreaFrame } from 'react-native-safe-area-context'


import FormField from '../components/FormField'


import { Link, router } from 'expo-router'
import CustomButton from '../components/CustomButton'
import images from '../../assets/images'



const ResetPass = () => {

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
        <View className='w-full justify-center  min-h-[52vh]  px-6 my-6 mb-10'>
          <Text className='text-4xl  mt-10 font-bold  text-black'>Reset Password</Text>

          <View  className='items-center  mt-5 flex-row '>
          <Text className='text-black text-base font-pregular' >Remember your password?</Text>
          <Link className='text-secondary text-primary-200 text-base font-psemibold' href={'/sign-up'}> Login </Link>
        </View>
        
        <FormField 
          title='Email'
          value={form.email}
          handleChangeText={(e)=>setForm({
            ...form, email:e
          })}
          placeholder={'New Password'}
          otherStyles='mt-7'
          keyboardType='password'
        />

        <FormField  
          title='Password'
          value={form.password}
          handleChangeText={(e)=>setForm({
            ...form, password: e
          })}
          placeholder={'Confirm New Password'}
           otherStyles='mt-5'
          keyboardType='password'
          className='flex-1'
          
        >
          
        </FormField>

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
        />
        {/* <Text className='text-center mt-10 mb-10 text-gray-100 text-sm '>Or Login With</Text>
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

export default ResetPass