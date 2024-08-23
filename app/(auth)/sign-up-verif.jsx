import { View, Image,Text, ScrollView,Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView, useSafeAreaFrame } from 'react-native-safe-area-context'


import FormField from '../components/FormField'


import { Link, router } from 'expo-router'
import CustomButton from '../components/CustomButton'
import images from '../../assets/images'
import CustomBottom from '../components/CustomBottom'



const SignUpVerif= () => {

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
        <View className='w-full justify-center  min-h-[32vh]  px-6 my-6'>
          <Text classname='text-white-100 text-sm'>Signup 3 of 4</Text>
          <Text className='text-4xl mt-2 font-bold mb-10 text-black'>Verification</Text>
        

              {/* <View  className='items-center  mt-5 flex-row '>
              <Text className='text-black text-base font-pregular' >New Here?</Text>
              <Link className='text-secondary text-primary-200 text-base font-psemibold' href={'/sign-up'}> Create Account </Link>
            </View> */}
        
            {/* <View className='mt-10  flex-row justify-evenly gap-2'>
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


            
            <Text className='text-black text-base font-pregular justify-start' >Attached proof of Department of Agriculture registrations i.e. Florida Fresh, USDA Approved, USDA Organic</Text>

              
            

            {/* <CustomButton 
              title='Sign In' 
              handlePress={submit}
              containerStyles='mt-7'
              isLoading={isSubmitting}
            /> */}
            {/* <View  className='items-center justify-center mt-5 flex-row '>
              <Link className='text-secondary text-base font-psemibold' href={'/sign-up'}> Sign-Up </Link>
            </View> */}
            
              <View className='flex-row items-center text-center justify-between mt-5'>
                <Text className='text-base text-black font-bold'>Attach Proof of Registration</Text>
                <View className='w-[53px] h-[53px] bg-primary-200 rounded-full items-center justify-center'>
                <Image 
                source={images.camera}
                resizeMode='contain'
                />
                </View>
              </View>
            
        </View>
      </ScrollView>
      <View  className='bottom-0 px-6 mb-10'>
      <CustomBottom
        title={'Continue'}
        back={false}
        handlePress={()=>{router.push('/sign-up-hours')}}
        />
        </View>
    </SafeAreaView>
  )
}

export default SignUpVerif