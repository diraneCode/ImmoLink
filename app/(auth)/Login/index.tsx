import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import * as Icon from 'react-native-feather'
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Page(){
    const navigation = useNavigation()
    return(
        <SafeAreaView className="flex-1 bg-white px-5 space-y-4">
            <TouchableOpacity className="w-8 h-8 bg-gray-100 rounded mt-10 items-center justify-center self-end"
            onPress={() => navigation.goBack()}
            >
                <FontAwesome5 name="times" size={20} color='gray' />
            </TouchableOpacity>
            <View className="flex-row space-x-1">
                <Text className="text-primary text-xl">Hey</Text>
                <Text className="font-bold text-xl">Salut 👋</Text>
            </View>
            <View className="flex-row space-x-1">
                <Text className="font-bold text-lg">Bienvenue Sur</Text>
                <Text className="text-primary text-xl">ImmoLink</Text>
            </View>
            <View className="space-y-1">
                <Text>Votre email</Text>
                <TextInput placeholder="test@example.com" className="bg-gray-300/20 px-4 rounded py-2" />
            </View>
            <View className="space-y-1">
                <Text>Votre mot de passe</Text>
                <TextInput placeholder="********" className="bg-gray-300/20 px-4 rounded py-2" 
                secureTextEntry/>
            </View>
            <Text className="text-xs self-end">Mot de passe oublier ?</Text>
            <TouchableOpacity className="bg-primary rounded-xl p-3">
                <Text className="text-lg text-white text-center">Connexion</Text>
            </TouchableOpacity>
            <View className="flex-row space-x-1">
                <Text>Vous n'avez pas de compte ?</Text>
                <Link href='/(auth)/Singup' asChild>
                    <TouchableOpacity>
                        <Text className="text-primary">Inscrivez-vous</Text>
                    </TouchableOpacity>
                </Link>
            </View>
            <Text className="self-center text-gray-500">Or Sign In With</Text>
            <View className="flex-row justify-around">
                <TouchableOpacity className="w-32 items-center border border-gray-500 p-3 rounded-xl">
                    <FontAwesome5 name="google" size={20} color='gray' />
                </TouchableOpacity>
                <TouchableOpacity className="w-32 items-center border border-gray-500 p-3 rounded-xl">
                    <FontAwesome5 name="facebook" size={20} color='gray' />
                </TouchableOpacity>
            </View>
            <Link href='/(admin)/dashboard'>
                <Text>Admin</Text>
            </Link>
        </SafeAreaView>
    );
}