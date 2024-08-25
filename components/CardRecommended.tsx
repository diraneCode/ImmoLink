import { Image, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function CardRecommended({id, type, photo, description, prix}){
    return(
        <Link href={{
            pathname: '/description/[id]',
            params: {id: Number(id)}
        }} 
                
                asChild
            >
        <TouchableOpacity className="w-full h-24 bg-white mb-2 space-x-4  rounded-xl flex-row py-1 px-2 items-center">
            <Image source={photo} className="w-20 h-20 rounded" />
            <View className="h-20 justify-around">
                <Text className="font-bold">{type}</Text>
                <Text className="text-xs text-gray-500 w-3/4" numberOfLines={1}>{description}</Text>
                <View className="w-56 flex-row items-center justify-between">
                    <View className="flex-row items-center">
                        <Text className="font-bold text-primary">{prix} FCFA</Text>
                        <Text className="text-xs text-gray-500"> /mois</Text>
                    </View>
                    <TouchableOpacity className="w-7 h-7 bg-white shadow rounded-full items-center justify-center">
                        <Ionicons name="heart-outline"size={16} color='#FF4EA5' />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
        </Link>
    );
}