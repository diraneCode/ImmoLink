import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, FlatList, ListRenderItem, ActivityIndicator, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";
import CardRoom from "@/components/Admin/CardRoom";
import { useFetchData } from "@/lib/api/roomsApi";
import { Troom } from "@/lib/definition";
import { roomData } from "@/lib/roomData";

export default function Page() {
  // const { data, loading } = useFetchData();
  // const renderItem: ListRenderItem<Troom> = ({ item }) => (
  //   <CardRoom
  //     id={item.id}
  //     type={item.type} 
  //     prix={item.prix} 
  //     description={item.description} 
  //     ville={item.ville} 
  //     nbChambre={item.nbChambre}
      
  //   />
  // );
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 px-4 bg-background space-y-6">
      <View className="flex-row items-center justify-between">
        <View>
          <Text className="text-xl">Vos chambres</Text>
          <Text>Ici vous pouvez gerer vos chambres.</Text>
        </View>
      </View>
      {/* {
        loading ? <View className="h-full items-center justify-center">
                      <ActivityIndicator size={100} color='#FF4EA5' />
                  </View> :
        <FlatList
          data={data}
          contentContainerStyle={{ rowGap: 10, paddingBottom: 80 }}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      } */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 50}}>
          {
              roomData.map((room, index) => (
                  <CardRoom key={index} id={room.id} prix={room.prix} type={room.type} photo={room.image} ville={room.localisation} description={room.description} />
              ))
          }
      </ScrollView>
    </SafeAreaView>
  );
}
