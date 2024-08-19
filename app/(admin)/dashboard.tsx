import {
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

export default function Page() {
  const navigation = useNavigation();
  const { latitude, longitude, location, errorMsg} = useLocation();
  return (
    <View className="flex-1 bg-background">
      <ScrollView showsVerticalScrollIndicator={false} className="space-y-2">
        <View className="w-full h-48 items-center bg-green-800 rounded-b-[50] p-5 space-y-4">
          <Text className="text-gray-400 mt-4">Hello Joker👋</Text>
          <View className="flex-row items-center space-x-2">
            <Text className="text-3xl text-white font-bold">
            <Text className="font-bold">{location ? `${location.ville} - ${location.pays}`   : 'erreur de reseau'}</Text>
            </Text>
            <Ionicons name="location-outline" size={25} color="#FF4EA5" />
          </View>
          <View className="w-full flex-row items-center bg-white py-3 px-8 rounded-full space-x-2">
            <Ionicons name="search" size={20} />
            <TextInput placeholder="What are you find ?" className="text-xl" />
          </View>
        </View>
        <View className="px-4 flex-row items-center justify-between">
          <Link href="/addRoom" asChild>
            <TouchableOpacity className="flex-row items-center space-x-3">
              <Text>Ajouter une chambre</Text>
              <Ionicons name="add-circle-outline" size={20} />
            </TouchableOpacity>
          </Link>
          <Link href="/rooms" className="px-4 self-end" asChild>
            <Text className="text-primary">Voir plus</Text>
          </Link>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="w-fit px-4"
        >
          <CardHome />
          <CardHome />
          <CardHome />
        </ScrollView>
      </ScrollView>
    </View>
  );
}
