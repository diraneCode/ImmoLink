import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CardRoom from '@/components/CardRoom';
import { roomData } from '@/lib/roomData';

export default function Page() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView className="self-center w-11/12" showsVerticalScrollIndicator={false} contentContainerStyle={{rowGap: 10, paddingBottom: 100}}>
        <Text className="text-xl">Vos Favoris</Text>
        {
          roomData.map((room) => (
            <CardRoom key={room.id} id={room.id} image={room.image} type={room.type} localisation={room.localisation} prix={room.prix} bigCard='true' />
          ))
        }
      </ScrollView>
    </SafeAreaView>
  );
}
