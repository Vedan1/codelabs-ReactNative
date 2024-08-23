import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const AuthLayout = () => {
  return (
    <>
   <Stack>
    <Stack.Screen
      name='sign-in'
      options={{headerShown:false}}
    />
    <Stack.Screen
      name='forgotPassword'
      options={{headerShown:false}}
    />
    <Stack.Screen
      name='verifycode'
      options={{headerShown:false}}
    />
    <Stack.Screen
      name='ResetPass'
      options={{headerShown:false}}
    />

    <Stack.Screen
      name='sign-up'
      options={{headerShown:false}}
    />
    <Stack.Screen
      name='sign-up-info'
      options={{headerShown:false}}
    />
    <Stack.Screen
      name='sign-up-verif'
      options={{headerShown:false}}
    />
    <Stack.Screen
      name='sign-up-hours'
      options={{headerShown:false}}
    />
   </Stack>
    
   </>
  )
}

export default AuthLayout