import { Ionicons } from "@expo/vector-icons";
import { View, TextInput } from "react-native";

export default function SearchInput(){
    return(
        <View className="flex-row items-center justify-between bg-white px-4 py-3 rounded-full mt-2">
            <Ionicons name="search" color='gray' size={15} />
            <TextInput placeholder='Studio, Chambre, Appartement, etc...' className="w-4/5" />
            <Ionicons name="menu" color='gray' size={20} />
        </View>
    );
}