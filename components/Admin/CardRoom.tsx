import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import * as Icon from 'react-native-feather'

export default function CardRoom(){
    return(
        <View className="w-full h-[400] rounded-2xl overflow-hidden relative">
            <View className="flex-row space-x-2 absolute top-2 right-2">
                <TouchableOpacity className="p-4 z-20 bg-blue-500 rounded-xl">
                    <FontAwesome5 name="edit" color='white' />
                </TouchableOpacity>
                <TouchableOpacity className="p-4 z-20 bg-red-500 rounded-xl">
                    <Ionicons name="trash-bin" color='white' size={15} />
                </TouchableOpacity>
            </View>
            <Image source={require("./../../assets/images/home.jpg")} className="w-full h-full rounded-2xl" />
            <View className="w-11/12 h-[100] bg-white self-center p-3 rounded-2xl absolute bottom-2">
                <View className="p-2">
                    <Text className="font-bold">Studio Moderne</Text>
                    <View className="flex-row items-center space-x-1">
                        <Ionicons name="location-outline" color='#FF4EA5' size={17} />
                        <Text className="text-xs text-gray-500">Douala, Logbessou</Text>
                    </View>
                    <View className="flex-row items-center justify-between">
                        <View className="flex-row items-center">
                            <Text className="font-bold text-primary">25 000 XAF</Text>
                            <Text className="text-xs text-gray-500">/mois</Text>
                        </View>
                        <TouchableOpacity className="w-5 h-5 bg-white shadow rounded-full items-center justify-center">
                            <Ionicons name="heart-outline"size={16} color='#FF4EA5' />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}