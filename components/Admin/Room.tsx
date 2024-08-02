import { FontAwesome5 } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Image, View, Text, TouchableOpacity } from "react-native";
import * as Icon from "react-native-feather";

export default function Room(){
    return(
        <TouchableOpacity className="bg-gray-300/20 rounded-2xl overflow-hidden relative mb-4">
            <View className="w-full h-52 rounded-br-3xl overflow-hidden">
                <Image source={require('@/assets/images/home.jpg')} className="w-full h-full" />
            </View>
            <View className="p-2 space-y-2">
                <View className="flex-row items-center justify-between">
                    <View>
                        <Text className="text-lg">Cozy Cottage</Text>
                        <Text className="text-xs text-gray-400">3284 sKYVIEW lANE, wA 98001</Text>
                    </View>
                    <Text className="text-2xl font-bold">$667,200</Text>
                </View>
                <View className="flex-row gap-x-5">
                    <View className="w-fit py-1 px-3 flex-row items-center gap-x-1 rounded-full bg-white">
                        <FontAwesome5 name="bed" color='gray' size={15} />
                        <Text>3 bed</Text>
                    </View>
                    <View className="w-fit py-1 px-3 flex-row items-center gap-x-1 rounded-full bg-white">
                        <FontAwesome5 name="camera" color='gray' size={15} />
                        <Text>2 car</Text>
                    </View>
                    <View className="w-fit py-1 px-3 flex-row items-center gap-x-1 rounded-full bg-white">
                        <FontAwesome5 name="bath" color='gray' size={15} />
                        <Text>2 bath</Text>
                    </View>
                </View>
            </View>
            <View className="w-11/12 absolute top-2 flex-row items-center justify-between self-center">
                <TouchableOpacity className="bg-green-300 py-2 px-4 rounded-full">
                    <Text>Disponible</Text>
                </TouchableOpacity>
                <View className="flex-row gap-x-2">
                    <Link href='/updateRoom' asChild>
                        <TouchableOpacity className="w-8 h-8 bg-slate-300 p-2 rounded-full">
                            <FontAwesome5 name="edit" color='black' size={15} />
                        </TouchableOpacity>
                    </Link>
                    <TouchableOpacity className="w-8 h-8 bg-slate-300 p-2 rounded-full">
                        <FontAwesome5 name="trash" color='black' size={15} />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
}