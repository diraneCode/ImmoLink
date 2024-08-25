import React, { useState } from 'react';
import { View, Text, ActivityIndicator, FlatList, ListRenderItem, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CardRoom from '@/components/CardRoom';
import { Troom } from '@/lib/definition';
import Toast from 'react-native-toast-message';
import { useFetchData } from '@/lib/api/roomsApi';
import SearchInput from '@/components/SearchInput';
import InputRange from '@/components/ui/InputRange';
import { roomData } from '@/lib/roomData';
import { Ionicons } from '@expo/vector-icons';


export default function Page() {
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(roomData);

  const handleSearch = (text) => {
    setSearchText(text);

    const filtered = roomData.filter((item) => {
      const searchTextLower = text.toLowerCase();
      return (
        item.type.toLowerCase().includes(searchTextLower) ||
        item.prix.toString().includes(searchTextLower)
      );
    });

    setFilteredData(filtered);
  };

  const renderItem = ({ item }) => (
    <CardRoom id={item.id} photo={item.image} prix={item.prix} type={item.type} ville={item.localisation} bigCard={true} />
  );

  return (
    <SafeAreaView className="flex-1 bg-background px-4 space-y-6">
        <Text className="text-xl mt-1 text-center">Ecran de recherche</Text>
        <View className="flex-row items-center justify-between bg-white px-4 py-3 rounded-full mt-2">
            <Ionicons name="search" color='gray' size={15} />
            <TextInput placeholder='Studio, Chambre, Appartement, etc...' className="w-4/5" value={searchText} onChangeText={handleSearch} />
            <Ionicons name="close" color='gray' size={20} onPress={() => setSearchText('')} />
        </View>
        {
          filteredData.length > 0 ? <View className="w-full h-4/5 self-center">
          <FlatList
            data={filteredData}
            renderItem={renderItem}
            contentContainerStyle={{ rowGap: 10, paddingBottom: 80 }}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
          />
        </View> :
        <View className="w-full h-4/5 self-center">
          <Text className="text-2xl font-bold self-center items-center">Aucun Logement trouve 🤒</Text>
        </View>
        }
      <Toast visibilityTime={3000} />
    </SafeAreaView>
  );
}
