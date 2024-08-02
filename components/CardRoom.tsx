import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import * as Icon from "react-native-feather";
import { FontAwesome5 } from "@expo/vector-icons";
import Toast from 'react-native-toast-message';

type props = {
    bigCard?: string
}

export default function CardRoom({bigCard}:props){
    const navigation = useNavigation();
    const showToast = () => {
        Toast.show({
          type: 'success',
          text1: 'Hello 👋',
          text2: 'Chambre ajouter a vos favoris ❤️'
        });
      }
    return(
        <Link href='/description/1' 
                className={`${bigCard ? 'w-full' : 'w-72'} h-72 bg-white rounded-xl 
                shadow overflow-hidden mr-5`}
                asChild
            >
            <TouchableOpacity>
                <Image source={require('@/assets/images/home.jpg')} className="w-full h-52" />
                <View className="p-2">
                    <Text className="font-bold">Studio Moderne</Text>
                    <View className="flex-row items-center space-x-1">
                        <Icon.MapPin className="text-primary" width={15} />
                        <Text className="text-xs text-gray-500">Douala, Logbessou</Text>
                    </View>
                    <View className="flex-row items-center justify-between">
                        <View className="flex-row items-center">
                            <Text className="font-bold text-primary">25 000 XAF</Text>
                            <Text className="text-xs text-gray-500">/mois</Text>
                        </View>
                        <TouchableOpacity className="w-7 h-7 mb-1 bg-white shadow rounded-full items-center justify-center"
                        onPress={showToast}
                        >
                            <FontAwesome5 name="heart"size={16} color='#FF4EA5' />
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        </Link>
    );
}