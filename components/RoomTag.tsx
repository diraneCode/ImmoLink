import { roomTag } from "@/lib/roomTag";
import { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

export default function RoomTag(){
    const [activeTag, setActiveTag] = useState('Studio')
    return(
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-4 space-x-4">
            {
                roomTag.map(({id, name}) => {
                    if(activeTag == name){
                        return <TouchableOpacity key={id} className="px-6 bg-primary rounded-full" onPress={() => setActiveTag(name)}>
                            <Text className="text-lg text-white">{name}</Text>
                        </TouchableOpacity>
                    }else{
                        return <TouchableOpacity key={id} className="px-6 bg-secondary rounded-full" onPress={() => setActiveTag(name)}>
                            <Text className="text-lg text-gray-600">{name}</Text>
                        </TouchableOpacity>
                    }
                })
            }
        </ScrollView>
    );
}