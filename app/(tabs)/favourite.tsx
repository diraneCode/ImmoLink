import React, { useEffect, useState } from 'react';
import { Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CardRoom from '@/components/CardRoom';
import { roomData } from '@/lib/roomData';
import Toast from 'react-native-toast-message';

export default function Page() {  
  
  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView className="self-center w-11/12" showsVerticalScrollIndicator={false} contentContainerStyle={{rowGap: 10, paddingBottom: 100}}>
        <Text className="text-xl">Vos Favoris</Text>
        {/* {
          roomData.map((room) => (
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
        } */}
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{gap: 10, paddingBottom: 70}}>
            {
              roomData.map((room, index) => (
                  <CardRoom key={index} id={room.id} prix={room.prix} type={room.type} photo={room.image} ville={room.localisation} bigCard={true}  />
              ))
            }
        </ScrollView>
      </ScrollView>
      <Toast visibilityTime={3000} />
    </SafeAreaView>
  );
}
