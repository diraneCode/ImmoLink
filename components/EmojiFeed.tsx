import { useState } from "react"
import { View, Text, TouchableOpacity } from "react-native"

export default EmojiFeed = () => {
    const [isActive, setIsActive] = useState('')
    return(
        <View className="w-full flex-row justify-around mb-5">
            <TouchableOpacity className={`w-16 h-16 rounded-full items-center justify-center relative ${isActive == '1' ? 'bg-[#3B886B]' : ''}`}
                onPress={() => setIsActive('1')}
            >
                <Text className="text-3xl">😄</Text>
                <View className={`${isActive == '1' ? 'block' : 'hidden'} w-20 p-1 bg-[#3B886B] rounded-full absolute -bottom-7`}>
                    <Text className="text-white text-xs text-center">Really Good</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity className={`w-16 h-16 rounded-full items-center justify-center relative ${isActive == '2' ? 'bg-[#dd901d]' : ''}`}
                onPress={() => setIsActive('2')}
            >
                <Text className="text-3xl">😑</Text>
                <View className={`${isActive == '2' ? 'block' : 'hidden'} w-20 p-1 bg-[#dd901d] rounded-full absolute -bottom-7`}>
                    <Text className="text-white text-xs text-center">Hum</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity className={`w-16 h-16 rounded-full items-center justify-center relative ${isActive == '3' ? 'bg-[#f31e65]' : ''}`}
                onPress={() => setIsActive('3')}
            >
                <Text className="text-3xl">😔</Text>
                <View className={`${isActive == '3' ? 'block' : 'hidden'} w-20 p-1 bg-[#f31e65] rounded-full absolute -bottom-7`}>
                    <Text className="text-white text-xs text-center">So Bad</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}