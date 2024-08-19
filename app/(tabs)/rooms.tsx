import React from 'react';
import { View, Text, ActivityIndicator, FlatList, ListRenderItem } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CardRoom from '@/components/CardRoom';
import { Troom } from '@/lib/definition';
import Toast from 'react-native-toast-message';
import { useFetchData } from '@/lib/api/roomsApi';


export default function Page() {
  const { data, loading, error} = useFetchData()
  
  const renderItem: ListRenderItem<Troom> = ({ item }) => (
    <CardRoom
      id={item.id}
      type={item.type}
      prix={item.prix}
      description={item.description}
      photo={item.photo}
      ville={item.ville}
      bigCard={true}
    />
  );

  return (
    <SafeAreaView className="flex-1 bg-background px-4 space-y-1">
        <Text className="text-xl mt-1">Toutes les logements</Text>
        <View className="w-full h-5/6 self-center">
          {
            loading ? <View className="h-screen items-center justify-center">
                        <ActivityIndicator size={100} color='#FF4EA5' />
                      </View> :
            <FlatList
              data={data}
              contentContainerStyle={{ rowGap: 10 }}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderItem}
            />
          }
        </View>
      <Toast visibilityTime={3000} />
    </SafeAreaView>
  );
}
