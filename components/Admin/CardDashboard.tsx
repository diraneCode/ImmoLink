import { FontAwesome5 } from "@expo/vector-icons";
import { View, Text } from "react-native";

export default function CardDashboard({title, size, color}){
    return(
        <View className="w-40 h-24 p-2 m-1 border-l-8 rounded-xl flex-row justify-between items-center" style={{backgroundColor: color}}>
            <View className="justify-between">
                <Text className="text-3xl text-white font-bold">{size}</Text>
                <Text className="text-sm text-white">{title}</Text>
            </View>
            <View className="w-10 h-10 rounded-full bg-black items-center justify-center">
                {/* <Icon.Home width={15} height={15} color={'white'} /> */}
                <FontAwesome5 name="home" color='white' size={15} />
            </View>
        </View>
    );
}