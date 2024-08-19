import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from 'expo-router'
import React, { useState, useCallback, useEffect } from 'react'
import { Text, View } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Page() {
    const navigation = useNavigation();
  const [messages, setMessages] = useState<any>([])

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        stystem: true,
        user: {
          _id: 2,
          name: 'Dirane',
          avatar: require('@/assets/images/profile.jpg'),
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    )
  }, [])

  return (
    <SafeAreaView className="flex-1 bg-background">
        <View className="flex-row items-center justify-between px-6 mt-2">
            <Ionicons name='arrow-back' size={20} onPress={() => navigation.goBack()} />
            <Text className="font-bold">Message</Text>
            <Text></Text>
        </View>
        <GiftedChat

            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id: 1,
            }}
        />
    </SafeAreaView>
  )
}