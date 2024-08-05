import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { View, TextInput } from "react-native";

export default function SearchInput(){
    const [search, setSearch] = useState('')
    return(
        <View className="flex-row items-center justify-between bg-white px-4 py-3 rounded-full mt-2">
            <Ionicons name="search" color='gray' size={15} />
            <TextInput placeholder='Studio, Chambre, Appartement, etc...' value={search} className="w-4/5" onChangeText={setSearch} />
            <Ionicons name="close" color='gray' size={20} onPress={()=>setSearch('')} />
        </View>
    );
}