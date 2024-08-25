import { View, Text } from "react-native";
import CardRecommended from "../CardRecommended";
import { roomData } from "@/lib/roomData";
import { roomDataLuxe } from "@/lib/roomDataLuxe";


export default function RecommendedList() {
  return (
    <View className="space-y-2">
        <Text className="font-bold">Logement de luxe</Text>
        <View className="pb-16">
            {
              roomDataLuxe.map((room, index) =>(
                <CardRecommended key={index} id={room.id} photo={room.image} prix={room.prix} type={room.type} description={room.description} />
              ))
            }
        </View>
    </View>
  )
}