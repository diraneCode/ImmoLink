import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";
import { Image, Text, TouchableOpacity, View, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function DescriptionRoom(){
    const navigation = useNavigation()
    return(
        <View className="flex-auto bg-background relative">
            <ScrollView className="w-full h-fit">
                <View className="h-2/4 relative">
                    <Image source={require('@/assets/images/home.jpg')} className="w-full h-full" />
                    <View className="w-4/5 self-center absolute top-10 flex-row items-center justify-between">
                        <TouchableOpacity className="w-8 h-8 bg-white rounded-full items-center justify-center"
                        onPress={() => navigation.goBack()}
                        >
                            <Ionicons name="chevron-back" size={25} color='black' />
                        </TouchableOpacity>
                        <Text className="font-bold text-xl">Review</Text>
                        <TouchableOpacity className="w-8 h-8 bg-white rounded-full items-center justify-center">
                            <Ionicons name="heart-outline"size={16} color='#FF4EA5' />
                        </TouchableOpacity>
                    </View>
                    <Link href='/see' className="absolute bottom-0 p-2 bg-primary rounded-md self-end" asChild>
                        <Text className="text-white">Voir plus</Text>
                    </Link>
                </View>
                <View className="h-screen mt-6 space-y-2">
                    <View className="flex-row justify-between items-center px-5">
                        <View className="w-fit py-1 px-2 rounded border border-primary">
                            <Text className="text-primary font-bold">25 000 XAF/mois</Text>
                        </View>
                        <Link href='/map' asChild>
                            <TouchableOpacity>
                                <Text>Ouvrir la carte</Text>
                            </TouchableOpacity>
                        </Link>
                    </View>
                    <View className="space-y-2">
                        <View className="flex-row items-center justify-between px-5">
                            <Text className="font-bold">Studio Moderne</Text>
                            <View className="flex-row items-center gap-x-1">
                                <Ionicons name="location-outline" size={20} color='#FF4EA5' />
                                <Text>Douala, Logbessou</Text>
                            </View>
                        </View>
                        <View className="flex-row justify-between border p-2 border-gray-300">
                            <View className="flex-row space-x-2">
                                <View className="w-10 h-10 bg-primary rounded-full"></View>
                                <View>
                                    <Text>Dirane Joker</Text>
                                    <Text>Proprietaire</Text>
                                </View>
                            </View>
                            <View className="flex-row space-x-2">
                                <Link href='/Login' asChild>
                                    <TouchableOpacity className="w-8 h-8 rounded-full bg-white items-center justify-center">
                                        <Ionicons name="call" size={16} color='#FF4EA5' />
                                    </TouchableOpacity>
                                </Link>
                                <Link href='/Singup' asChild>
                                    <TouchableOpacity className="w-8 h-8 rounded-full bg-white items-center justify-center">
                                        <Ionicons name="mail" size={16} color='#FF4EA5' />
                                    </TouchableOpacity>
                                </Link>
                            </View>
                        </View>
                        <Text className="font-bold px-5">Description</Text>
                        <Text className="text-left px-5" numberOfLines={3}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum doloribus, illo saepe excepturi quasi provident. Voluptates fuga ut officiis quaerat iure deserunt similique iste! Consectetur nihil velit doloremque ullam soluta!
                        </Text>
                        <Link href='/(tabs)/calendar' asChild>
                            <TouchableOpacity className="w-2/4 self-center rounded-full p-3 bg-primary px-5">
                                <Text className="text-center text-white">Planifier une visite</Text>
                            </TouchableOpacity>
                        </Link>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}