import { Image, ScrollView, Text, TextInput, TouchableOpacity, View  } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import Room from "../../components/Admin/Room"
import { useNavigation } from "@react-navigation/native"
import CardDashboard from "../../components/Admin/CardDashboard"
import { Link } from "expo-router"
import { FontAwesome5, FontAwesome6, Feather } from "@expo/vector-icons"
import CardHome from "@/components/Admin/CardHome"

export default function Dashbaord(){
    const navigation = useNavigation();
    return(
        <View className="flex-1 bg-background">
            <ScrollView showsVerticalScrollIndicator={false} className="space-y-2">
                <View className="w-full h-48 items-center bg-green-800 rounded-b-[50] p-5 space-y-4">
                    <Text className="text-gray-400 mt-4">Hello Joker👋</Text>
                    <View className="flex-row items-center space-x-2">
                        <Text className="text-3xl text-white font-bold">Douala, Logbessou</Text>
                        <Feather name='map-pin' size={25} color="purple" />
                    </View>
                    <View className="w-full flex-row items-center bg-white py-3 px-8 rounded-full space-x-2">
                        <Feather name="search" size={20} />
                        <TextInput placeholder="What are you find ?" className="text-xl" />
                    </View>
                </View>
                <View className="flex-row self-center px-4 gap-5">
                    <View className="w-36 h-24 p-5 rounded-xl bg-white">
                        <Text>Nombre de chambres</Text>
                    </View>
                    <View className="w-36 h-24 p-5 rounded-xl bg-white">
                        <Text>Nombre de chambres</Text>
                    </View>
                </View>
                <View className="flex-row self-center gap-x-4">
                    <View className="w-36 h-24 p-5 rounded-xl bg-white">
                        <Text>Nombre de chambres</Text>
                    </View>
                    <View className="w-36 h-24 p-5 rounded-xl bg-white">
                        <Text>Nombre de chambres</Text>
                    </View>
                </View>
                <View className="px-4 flex-row items-center justify-between">
                    <Link href='/addRoom' asChild>
                        <TouchableOpacity className="flex-row items-center space-x-3">
                            <Text>Ajouter une chambre</Text>
                            <FontAwesome5 name="plus" size={15} />
                        </TouchableOpacity>
                    </Link>
                    <Link href="/rooms" className="px-4 self-end" asChild>
                        <Text className="text-primary">Voir plus</Text>
                    </Link>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} className="w-fit px-4">
                    <CardHome />
                    <CardHome />
                    <CardHome />
                </ScrollView>
            </ScrollView>
        </View>
    )
}