import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome5, Feather } from '@expo/vector-icons'

export default function Page() {
    const navigation = useNavigation()
  return (
    <SafeAreaView className="px-5 space-y-4">
      <View className="flex-row  items-center justify-between">
        <TouchableOpacity onPress={()=>navigation.goBack()}>
            <FontAwesome5 name="chevron-left" color='black' />
        </TouchableOpacity>
        <Text>My Account</Text>
        <TouchableOpacity>
            <FontAwesome5 name="edit" color='black' />
        </TouchableOpacity>
      </View>
      <View className="self-center items-center">
        <View className="w-32 h-32 rounded-full bg-white">
          <Image source={require('./../../assets/images/profile.jpg')} className="w-full h-full rounded-full" />
          <TouchableOpacity className="w-8 h-8 bg-yellow-400 rounded-full items-center justify-center absolute bottom-0 right-0">
            <FontAwesome5 name="edit" size={16} color="white" />
          </TouchableOpacity>
        </View>
        <Text>Dirane Code</Text>
        <Text>diranemekem@gmail.com</Text>
        <TouchableOpacity className="p-3 px-10 bg-yellow-400 rounded-full">
          <Text className="text-white">Edit Profile</Text>
        </TouchableOpacity>
        <View>
          <Text>Dirane</Text>
          <Text>697609387</Text>
          <Text>Etudiant</Text>
          <TouchableOpacity className="flex-row items-center">
            <Feather name="log-out" />
            <Text>Deonnexion</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}