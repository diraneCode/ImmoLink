import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from '@expo/vector-icons'

export default function Page(){
    const navigation = useNavigation();
    return(
        <SafeAreaView className="flex-1 bg-white px-4 space-y-3 mt-1">
            <View className="flex-row items-center justify-between">
                <FontAwesome5 name="chevron-left" color='black' size={20} onPress={()=>navigation.goBack()} />
                <Text className="font-bold">Ajouter une proprieter</Text>
                <Text></Text>
            </View>
            <View className="space-y-8">
                <View className="border p-1 rounded relative">
                    <Text className="absolute -top-3 left-2 px-2 bg-white">Nom</Text>
                    <TextInput placeholder="Entrez le nom" className="py-1 px-3" />
                </View>
                <View className="border p-1 rounded relative">
                    <Text className="absolute -top-3 left-2 px-2 bg-white">Ville</Text>
                    <TextInput placeholder="Entrez la Ville" className="py-1 px-3" />
                </View>
                <View className="border p-1 rounded relative">
                    <Text className="absolute -top-3 left-2 px-2 bg-white">Quartier</Text>
                    <TextInput placeholder="Entrez le Quartier" className="py-1 px-3" />
                </View>
                <View className="flex-row justify-between space-x-1">
                    <View className="w-2/4 border p-1 rounded relative">
                        <Text className="absolute -top-3 left-2 px-2 bg-white">Loyer</Text>
                        <TextInput placeholder="Entrez le loyer" className="py-1 px-3" />
                    </View>                    
                    <View className="w-2/4 border p-1 rounded relative">
                        <Text className="absolute -top-3 left-2 px-2 bg-white">Mois</Text>
                        <TextInput placeholder="Entrez le mois" className="py-1 px-3" />
                    </View>                    
                </View>
                <View className="border p-1 rounded relative">
                    <Text className="absolute -top-3 left-2 px-2 bg-white">Price</Text>
                    <TextInput placeholder="Entrez le prix" className="py-1 px-3" />
                </View>
                <View className="border p-1 rounded relative">
                    <Text className="absolute -top-3 left-2 px-2 bg-white">Description</Text>
                    <TextInput placeholder="Entrez la description" className="py-1 px-3" multiline numberOfLines={6} />
                </View>
                <View>
                    <Text>Ajouter des images</Text>
                    <TouchableOpacity className="w-1/2 p-1 bg-blue-400 rounded-md">
                        <Text className="text-center text-lg font-bold text-white">Upload Pictures</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity className="p-2 bg-primary rounded-md">
                    <Text className="text-center text-lg font-bold text-white">Publier</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}