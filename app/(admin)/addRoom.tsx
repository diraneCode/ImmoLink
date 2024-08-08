import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";

export default function Page(){
    const navigation = useNavigation();
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
      };

    return(
        <SafeAreaView className="flex-1 bg-white px-4 space-y-3 mt-1">
            <View className="flex-row items-center justify-between">
                <FontAwesome5 name="chevron-left" color='black' size={20} onPress={()=>navigation.goBack()} />
                <Text className="font-bold text-xl">Ajouter une proprieter</Text>
                <Text></Text>
            </View>
            <View className="space-y-4">
                <View className="space-y-1">
                    <Text>Type de chanbre</Text>
                    <TextInput placeholder="Studio" className="bg-gray-300/20 px-4 rounded py-3" />
                </View>
                <View className="space-y-1">
                    <Text>Ville</Text>
                    <TextInput placeholder="Ville" className="bg-gray-300/20 px-4 rounded py-3" />
                </View>
                <View className="flex-row justify-between">
                    <View className="space-y-1 w-[45%]">
                        <Text>Prix</Text>
                        <TextInput placeholder="Ville" className="bg-gray-300/20 px-4 rounded py-3" />
                    </View>
                    <View className="space-y-1 w-[45%]">
                        <Text>Nombre de chambre</Text>
                        <TextInput placeholder="Ville" className="bg-gray-300/20 px-4 rounded py-3" />
                    </View>
                </View>
                <View className="space-y-1">
                    <Text>Description</Text>
                    <TextInput placeholder="Description" className="bg-gray-300/20 px-4 rounded py-3" multiline numberOfLines={5} />
                </View>
                <View className="flex-row justify-between">
                    <TouchableOpacity className="p-3 bg-blue-400 rounded-xl">
                        <Text className="text-white text-xl text-center">Localisation</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="p-3 bg-blue-400 rounded-xl" onPress={pickImage}>
                        <Text className="text-white text-xl text-center">Ajouter des photos</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity className="bg-primary rounded-xl p-3">
                    <Text className="text-lg text-white text-center">Publier l'annonce</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}