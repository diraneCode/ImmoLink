import { View, Image } from "react-native"

export default function CardHome(){
    return(
        <View className="w-52 h-72 rounded-xl overflow-hidden mr-2">
            <Image source={require('./../../assets/images/home.jpg')} className="w-full h-full" />
        </View>
    )
}