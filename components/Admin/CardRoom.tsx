import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { Troom } from "@/lib/definition";
import BtnDeleteRoom from "./BtnDeleteRoom";
import BtnUpdate from "./BtnUpdate";

export default function CardRoom({ id, type, prix, ville, photo }: Troom) {
  return (
    <View className="w-full h-[400] rounded-2xl overflow-hidden mb-4 relative">
      <View className="flex-row gap-x-2 absolute top-2 right-2">
        <BtnUpdate id={id} />
        <BtnDeleteRoom id={id} />
      </View>
      <Image
        source={photo}
        className="w-full h-full rounded-2xl"
      />
      <View className="w-11/12 h-[100] bg-white self-center p-3 rounded-2xl absolute bottom-2">
        <View className="p-2">
          <Text className="font-bold">{type}</Text>
          <View className="flex-row items-center space-x-1">
            <Ionicons name="location-outline" color="#FF4EA5" size={17} />
            <Text className="text-xs text-gray-500">{ville}</Text>
          </View>
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center">
              <Text className="font-bold text-primary">{prix} XAF</Text>
              <Text className="text-xs text-gray-500">/mois</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
