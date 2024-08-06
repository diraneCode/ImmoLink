import React from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CardRoom from '@/components/CardRoom';
import { roomData } from '@/lib/roomData';
import { roomType } from '@/lib/definition';
import Toast from 'react-native-toast-message';

export default function Page() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView className="self-center w-11/12" showsVerticalScrollIndicator={false} contentContainerStyle={{rowGap: 10, paddingBottom: 100}}>
        <Text className="text-xl">Toutes les logements</Text>
        {
          roomData.map((room:roomType) => (
              <CardRoom 
                key={room.id} 
                id={room.id} 
                type={room.type} 
                prix={room.prix}
                description={room.description} 
                image={room.image} 
                localisation={room.localisation} 
                bigCard={true}
              />
          ))
        }
      </ScrollView>
      <Toast visibilityTime={3000} />
    </SafeAreaView>
  );
}
