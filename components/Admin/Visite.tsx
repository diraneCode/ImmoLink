import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function Visite({date, visite}) {
  const accept = () => {
    alert("Demande de visite accepter")
  }
  const decline = () => {
    alert("Demande de visite annuler")
  }
  return (
    <View className="bg-white p-3 rounded-md shadow-md flex-row justify-between items-center mb-4">
        <Text>{date}</Text>
        <View className="flex-row space-x-2">
            {visite == true ? <TouchableOpacity className="p-3 bg-blue-500 rounded-md" onPress={accept}>
                <Ionicons name="checkbox" size={18} color='white' />
            </TouchableOpacity> : null}
            <TouchableOpacity className="p-3 bg-red-500 rounded-md" onPress={decline}>
                <Ionicons name="close" size={18} color='white' />
            </TouchableOpacity>
        </View>
    </View>
  )
}