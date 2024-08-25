import { Link, useLocalSearchParams } from "expo-router";
import { Image, Text, TouchableOpacity, View, ScrollView, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { roomData } from "@/lib/roomData";
import BtnWhatsapp from "@/components/description/BtnWhatsapp";
import ShareFile from "@/components/description/ShareFile";
import { useOneFetchData } from "@/lib/api/roomsApi";
import BtnCall from "@/components/description/BtnCall";
import HeaderDescription from "@/components/description/HeaderDescription";
import BtnMail from "@/components/description/BtnMail";
import ModalCalendar from "@/components/description/ModalCalendar";
import ModalMap from "@/components/description/ModalMap";


export default function DescriptionRoom(){

    const { id } = useLocalSearchParams();
    // const {data, error, loading} = useOneFetchData(Number(id));
    const data = roomData.filter(element => element.id === Number(id));
    
    return(
        <View className="flex-auto bg-background relative">
            {/* {
                loading ? <View className="h-screen items-center justify-center">
                    <ActivityIndicator size={100} color='#FF4EA5' />
                </View> : */}
                <ScrollView className="w-full h-fit">
                <View className="h-2/4 relative">
                    <Image source={data[0].image} className="w-full h-full" />
                    <HeaderDescription />
                    <Link href='/see' className="absolute bottom-0 p-2 bg-primary rounded-md self-end" asChild>
                        <Text className="text-white">Voir plus</Text>
                    </Link>
                    </View>
                    <View className="h-screen mt-6 space-y-2">
                        <View className="flex-row justify-between items-center px-5">
                            <View className="w-fit py-1 px-2 rounded border border-primary">
                                <Text className="text-primary font-bold">{data[0].prix} XAF/mois</Text>
                            </View>
                            {/* <Link href='/map' asChild>
                                <TouchableOpacity className="flex-row items-center space-x-1">
                                    <Ionicons name="map" size={20} />
                                    <Text>Ouvrir la carte</Text>
                                </TouchableOpacity>
                            </Link> */}
                            <ModalMap type={data[0].type} lat={data[0].latitude} long={data[0].longitude} latDelta={data[0].latDelta} longDelta={data[0].longDelta} />
                        </View>
                        <View className="space-y-2">
                            <View className="flex-row items-center justify-between px-5">
                                <Text className="font-bold">{data[0].type}</Text>
                                <View className="flex-row items-center gap-x-1">
                                    <Ionicons name="location-outline" size={20} color='#FF4EA5' />
                                    <Text>{data[0].localisation}</Text>
                                </View>
                            </View>
                            <View className="flex-row justify-between border p-2 border-gray-300">
                                <View className="flex-row space-x-2">
                                    <View className="w-10 h-10 bg-primary rounded-full overflow-hidden">
                                        <Image source={data[0].proprietaire.image} className="w-full h-full" />
                                    </View>
                                    <View>
                                        <Text>{data[0].proprietaire.nom}</Text>
                                        <Text>Proprietaire</Text>
                                    </View>
                                </View>
                                <View className="w-2/5 flex-row justify-between">
                                    {/* <BtnMail /> */}
                                    <BtnCall numero={data[0].proprietaire.telephone} />
                                    <BtnWhatsapp numero={data[0].proprietaire.telephone} image={data[0].image} localisation={data[0].localisation} />
                                    <ShareFile image={data[0].image} />
                                </View>
                            </View>
                            <Text className="font-bold px-5">Description</Text>
                            <Text className="text-left px-5 mb-4">
                                {data[0].description}
                            </Text>
                            <ModalCalendar />
                        </View>
                    </View>
                </ScrollView>
            {/* } */}
            {/* <Link href='/message' className="w-12 h-12 rounded-full bg-primary items-center justify-center absolute bottom-14 right-5" asChild>
                <TouchableOpacity>
                    <Ionicons name="chatbox" size={20} color='white' />
                </TouchableOpacity>
            </Link> */}
        </View>
    );
}