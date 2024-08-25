import { Ionicons } from "@expo/vector-icons";
import { View, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HeaderDescription() {
  const navigation = useNavigation()
  return (
    <View className="w-4/5 self-center absolute top-10 flex-row items-center justify-between">
        <TouchableOpacity className="w-8 h-8 bg-white rounded-full items-center justify-center"
        onPress={() => navigation.goBack()}
        >
            <Ionicons name="chevron-back" size={25} color='black' />
        </TouchableOpacity>
        <Text className="font-bold text-xl">Description</Text>
        <TouchableOpacity className="w-8 h-8 bg-white rounded-full items-center justify-center">
            <Ionicons name="heart-outline"size={16} color='#FF4EA5' />
        </TouchableOpacity>
    </View>
  )
}