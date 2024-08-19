import { View, Text } from "react-native";
import CardRecommended from "../CardRecommended";


export default function RecommendedList() {
  return (
    <View className="space-y-2">
        <Text className="font-bold">Pour vous</Text>
        <View className="pb-16">
            <CardRecommended />
            <CardRecommended />
            <CardRecommended />
            <CardRecommended />
            <CardRecommended />
        </View>
    </View>
  )
}