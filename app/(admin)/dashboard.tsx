import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import CardHome from "@/components/Admin/CardHome";
import { useLocation } from "@/hooks/useLocation";
import { useFetchData } from "@/lib/api/roomsApi";
import { Troom } from "@/lib/definition";
import CardRoom from "@/components/CardRoom";
import { roomData } from "@/lib/roomData";

export default function Page() {
  const navigation = useNavigation();
  const { latitude, longitude, location, errorMsg} = useLocation();
  // const { data, loading, error} = useFetchData()

  //   const renderItem: ListRenderItem<Troom> = ({ item }) => (
  //       <CardHome
  //           id={item.id}
  //           photo={item.photo}
  //       />
  //   );
  return (
    <View className="flex-1 bg-background">
      <ScrollView showsVerticalScrollIndicator={false} className="space-y-2">
        <View className="w-full h-48 items-center bg-green-800 rounded-b-[50] p-5 space-y-4">
          <Text className="text-gray-400 mt-4">Hello Beatrice 👋</Text>
          <View className="flex-row items-center space-x-2">
            <Text className="text-3xl text-white font-bold">
            <Text className="font-bold">{location ? `${location.ville} - ${location.pays}`   : 'erreur de reseau'}</Text>
            </Text>
            <Ionicons name="location-outline" size={25} color="#FF4EA5" />
          </View>
          <View className="w-full flex-row items-center bg-white py-3 px-8 rounded-full justify-between">
            <Ionicons name="desktop-outline" size={20} />
            <Text className="text-xl font-bold">Dashboard</Text>
            <Link href="/(tabs)" className="px-4 self-end" asChild>
          <Ionicons name="power" size={25} color='red' />
            {/* <Text className="text-primary">Voir plus</Text> */}
          </Link>
            {/* <TextInput placeholder="What are you find ?" className="text-xl" /> */}
          </View>
        </View>
        <View className="px-4 flex-row items-center justify-between">
          <Link href="/addRoom" asChild>
            <TouchableOpacity className="flex-row items-center space-x-3">
              <Text>Ajouter une chambre</Text>
              <Ionicons name="add-circle-outline" size={30} />
            </TouchableOpacity>
          </Link>
          
        </View>
        {/* {
            loading ? <View className="h-full items-center justify-center">
                    <ActivityIndicator size={100} color='#FF4EA5' />
                </View> :
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data}
                contentContainerStyle={{ rowGap: 10 }}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
            />
        } */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
                roomData.map((room, index) => (
                    <CardHome key={index} photo={room.image} />
                ))
            }
        </ScrollView>
      </ScrollView>
    </View>
  );
}
