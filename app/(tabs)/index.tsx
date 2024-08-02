import {  View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import * as Icon from 'react-native-feather'
import Card from '@/components/CardRoom';
import CardRecommended from '@/components/CardRecommended';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feedback from '@/components/Feedback';
import Tag from '@/components/Tag';
import { Link } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';
import Toast from 'react-native-toast-message';


const HomeScreen = () => {
    return (
        <SafeAreaView className="flex-1 bg-background px-5 relative">
            <ScrollView showsVerticalScrollIndicator={false} className="space-y-4">
                <View className="flex-row items-center justify-between">
                    <View>
                        <View className="flex-row items-center">
                            <Text className="text-gray-400">Emplacement </Text>
                            <FontAwesome5 name="chevron-down" color='gray' size={15} />
                        </View>
                        <View className="flex-row items-center space-x-2">
                            <Icon.MapPin className="text-primary" width={17} />
                            <Text className="font-bold">Douala - 🏴‍☠️</Text>
                        </View>
                    </View>
                    <TouchableOpacity className="w-6 h-6 bg-white shadow-md rounded-full items-center justify-center">
                        <FontAwesome5 name="bell" color='gray' size={20} />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text className="text-md font-bold">Hi Dirane 👋</Text>
                    <Text>Tu as besoin d'un logement ?</Text>
                </View>
                <View className="flex-row items-center justify-between bg-white px-4 py-3 rounded-full">
                    <FontAwesome5 name="search" color='gray' size={15} />
                    <TextInput placeholder='Studio, Chambre, Appartement, etc...' className="w-4/5" />
                    <FontAwesome5 name="bars" color='gray' size={20} />
                </View>
                <Tag />
                <View className="flex-row justify-between items-center">
                    <Text className="font-bold">A Proximite</Text>
                    <Link href='/rooms' className="text-primary">
                        Voir plus
                    </Link>
                </View>
                <View>
                    <ScrollView horizontal className="h-72" showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingBottom: 20}} >
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </ScrollView>
                </View>
                <Text className="font-bold">Pour vous</Text>
                <View className="pb-16">
                    <CardRecommended />
                    <CardRecommended />
                    <CardRecommended />
                    <CardRecommended />
                    <CardRecommended />
                </View>
            </ScrollView>
            <Feedback />
            <Toast visibilityTime={3000} />
        </SafeAreaView>
    );
}


export default HomeScreen;
