import { Text, TextInput, TouchableOpacity, View } from "react-native";
import EmojiFeed from "../components/EmojiFeed";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

export default Feedback = () => {
    const [isShow, setIsShow] = useState(true)
    return (
        <View className={`${isShow ? 'block' : 'hidden'} w-full bg-white shadow-lg p-3 space-y-3 shadow-black absolute top-1/4 self-center rounded-lg`}>
            <View className="flex-row items-center justify-between p-3 border-b border-gray-300">
                <Text className="text-[#111941]">Partager l'avis</Text>
                    <Ionicons name="close" color='black' size={25} onPress={() => setIsShow(false)} />
            </View>
            <View className="w-full items-center space-y-4">
                <Text className="text-2xl font-bold text-[#111941]">Votre expérience ?</Text>
                <Text className="text-center px-4 text-[#111941]">Votre avis nous aidera à améliorer notre produit et à le rendre convivial pour davantage d'utilisateurs.</Text>
                <EmojiFeed />
                {/* <TextInput placeholder="Share feedback..." multiline numberOfLines={5}
                className="w-full border border-gray-300 p-2 rounded-md"
                /> */}
                <TouchableOpacity className="w-full bg-[#3B886B] p-3 rounded-md">
                    <Text className="text-lg text-white text-center font-bold">Partager l'avis</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
