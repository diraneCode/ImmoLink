import {  View, Text, TouchableOpacity, ScrollView, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feedback from '@/components/Feedback';
import Tag from '@/components/RoomTag';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Toast from 'react-native-toast-message';
import SearchInput from '@/components/SearchInput';
import RoomList from '@/components/home/RoomList';
import RecommendedList from '@/components/home/RecommendedList';
import { useLocation } from '@/hooks/useLocation';
import CardHome from '@/components/Admin/CardHome';
import { roomData } from '@/lib/roomData';
import CardRoom from '@/components/CardRoom';


const HomeScreen = () => {
    const { latitude, longitude, location, errorMsg} = useLocation();
    
    return (
        <SafeAreaView className="flex-1 bg-background px-5 relative font-[Popins]">
            <ScrollView showsVerticalScrollIndicator={false} className="space-y-4">
                <View className="flex-row items-center justify-between">
                    <View>
                        <View className="flex-row items-center">
                            <Text className="text-gray-400">Emplacement </Text>
                            <Ionicons name="chevron-down" color='gray' size={18} />
                        </View>
                        <View className="flex-row items-center space-x-2">
                            <Ionicons name='location-outline' size={22} color='#FF4EA5' />
                            <Text className="font-bold">{location ? `${location.ville} - ${location.pays}`   : 'erreur de reseau'}</Text>
                        </View>
                    </View>
                    <Link href='/Login' asChild>
                        <TouchableOpacity className="w-7 h-7 bg-white shadow-md rounded-full items-center justify-center">
                            <Ionicons name="person" color='gray' size={20} />
                        </TouchableOpacity>
                    </Link>
                </View>
                <View>
                    <Text className="text-md font-bold">Hi, Bienvenue 👋</Text>
                    <Text>Tu as besoin d'un logement ?</Text>
                </View>
                <SearchInput />
                <Tag />
                <View className="flex-row justify-between items-center">
                    <Text className="font-bold">Disponible</Text>
                    <Link href='/(tabs)/rooms' className="text-primary">
                        Voir plus
                    </Link>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {
                        roomData.map((room, index) => (
                            <CardRoom key={index} id={room.id} prix={room.prix} type={room.type} photo={room.image} ville={room.localisation}  />
                        ))
                    }
                </ScrollView>
                {/* <RoomList /> */}
                <RecommendedList />
            </ScrollView>
            {/* <Feedback /> */}
            <Toast visibilityTime={3000} />
        </SafeAreaView>
    );
}


export default HomeScreen;
