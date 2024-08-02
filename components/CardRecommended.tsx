import { Image, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CardRecommended(){
    return(
        <TouchableOpacity className="w-full h-24 bg-white mb-2 space-x-4  rounded-xl flex-row py-1 px-2 items-center">
            <Image source={require('@/assets/images/home.jpg')} className="w-20 h-20 rounded" />
            <View className="h-20 justify-around">
                <Text className="font-bold">London Prenium Hotel</Text>
                <Text className="text-xs text-gray-500">LondonNW87JT England</Text>
                <View className="w-56 flex-row items-center justify-between">
                    <View className="flex-row items-center">
                        <Text className="font-bold text-primary">25 000 XAF</Text>
                        <Text className="text-xs text-gray-500">/mois</Text>
                    </View>
                    <TouchableOpacity className="w-7 h-7 bg-white shadow rounded-full items-center justify-center">
                        <Ionicons name="heart-outline"size={16} color='#FF4EA5' />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
}