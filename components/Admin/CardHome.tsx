import { View, Image } from "react-native"

export default function CardHome({photo}){
    return(
        <View className="w-52 h-72 rounded-xl overflow-hidden ml-2 mr-2">
            <Image source={photo} className="w-full h-full" />
        </View>
    )
}