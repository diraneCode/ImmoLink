import { useNavigation } from "@react-navigation/native";
import { Link, useLocalSearchParams } from "expo-router";
import { Image, Text, TouchableOpacity, View, ScrollView, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { roomData } from "@/lib/roomData";
import * as Linking from 'expo-linking';
import BtnWhatsapp from "@/components/BtnWhatsapp";
import ShareFile from "@/components/ShareFile";
import { useOneFetchData } from "@/lib/api/roomsApi";


export default function DescriptionRoom(){

    const { id } = useLocalSearchParams();
    const {data, error, loading} = useOneFetchData(Number(id));
    const navigation = useNavigation()

    // Pour les appels
    const makeCall = () => {
        Linking.openURL('tel:+237697609387');
    }
    // Pour les appels
    
    return(
        <View className="flex-auto bg-background relative">
            {
                loading ? <View className="h-screen items-center justify-center">
                    <ActivityIndicator size={100} color='#FF4EA5' />
                </View> :
                <ScrollView className="w-full h-fit">
                <View className="h-2/4 relative">
                    <Image source={require(`../../../assets/images/rooms/room (1).jpg`)} className="w-full h-full" />
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
                                <Text className="text-primary font-bold">{data?.prix} XAF/mois</Text>
                            </View>
                            <Link href='/map' asChild>
                                <TouchableOpacity className="flex-row items-center space-x-1">
                                    <Ionicons name="map" size={20} />
                                    <Text>Ouvrir la carte</Text>
                                </TouchableOpacity>
                            </Link>
                        </View>
                        <View className="space-y-2">
                            <View className="flex-row items-center justify-between px-5">
                                <Text className="font-bold">{roomData[Number(id)].type}</Text>
                                <View className="flex-row items-center gap-x-1">
                                    <Ionicons name="location-outline" size={20} color='#FF4EA5' />
                                    <Text>{data?.ville}</Text>
                                </View>
                            </View>
                            <View className="flex-row justify-between border p-2 border-gray-300">
                                <View className="flex-row space-x-2">
                                    <View className="w-10 h-10 bg-primary rounded-full overflow-hidden">
                                        <Image source={require('../../../assets/images/profile.jpg')} className="w-full h-full" />
                                    </View>
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
                                    <TouchableOpacity className="w-8 h-8 rounded-full bg-white items-center justify-center" onPress={makeCall}>
                                        <Ionicons name="call" size={16} color='#FF4EA5' />
                                    </TouchableOpacity>
                                    <BtnWhatsapp />
                                    <ShareFile />
                                </View>
                            </View>
                            <Text className="font-bold px-5">Description</Text>
                            <Text className="text-left px-5" numberOfLines={3}>
                                {data?.description}
                            </Text>
                            <Link href='/(tabs)/calendar' asChild>
                                <TouchableOpacity className="w-2/4 self-center rounded-full p-3 bg-primary px-5">
                                    <Text className="text-center text-white">Planifier une visite</Text>
                                </TouchableOpacity>
                            </Link>
                        </View>
                    </View>
                </ScrollView>
            }
        </View>
    );
}