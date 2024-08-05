import { useNavigation } from "@react-navigation/native";
import { Link, Router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Toast from 'react-native-toast-message';
import { roomType } from "@/lib/definition";
import { useState } from "react";

type props = {
    bigCard?: string
}

export default function CardRoom({ id, nom, prix, description, image, localisation, type, bigCard}: roomType){
    const navigation = useNavigation();
    const [favorite, setFavorite] = useState(false);
    const showToast = () => {
        Toast.show({
          type: 'success',
          text1: 'Hello 👋',
          text2: 'Chambre ajouter a vos favoris ❤️'
        });
    }
    const handleFavorite = () => {
        setFavorite(!favorite);
        showToast();
    }
    return(
        <Link href={{
            pathname: '/description/[id]',
            params: {id: id}
        }} 
                className={`${bigCard ? 'w-full' : 'w-72'} h-72 bg-white rounded-xl 
                shadow overflow-hidden mr-5`}
                asChild
            >
            <TouchableOpacity>
                <Image source={image} className="w-full h-52" />
                <View className="py-1 px-2">
                    <Text className="font-bold">{type}</Text>
                    <View className="flex-row items-center space-x-1">
                        <Ionicons name="location-outline" color='#FF4EA5' size={20} />
                        <Text className="text-xs text-gray-500">{localisation}</Text>
                    </View>
                    <View className="flex-row items-center justify-between">
                        <View className="flex-row items-center">
                            <Text className="font-bold text-primary">{prix} XAF</Text>
                            <Text className="text-xs text-gray-500">/mois</Text>
                        </View>
                        <TouchableOpacity className="w-7 h-7 bg-white shadow rounded-full items-center justify-center"
                        onPress={handleFavorite}
                        >
                            <Ionicons name={favorite ? "heart" :  "heart-outline"} size={16} color='#FF4EA5' />
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        </Link>
    );
}