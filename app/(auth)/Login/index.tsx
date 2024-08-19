import { useNavigation } from "@react-navigation/native";
import { Link, router } from "expo-router";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";
import { Tuser } from "@/lib/definition";
import { loginUser } from "@/lib/api/userApi";


export default function Page() {
  const navigation = useNavigation();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Tuser>({});
  
  const validateForm = () => {
    let error:Tuser = {};
    if(!email) error.email = "Email requis"
    if(!password) error.password = "Mot de passe requis"
    
    
    setErrors(error)
    return Object.keys(error).length == 0
  }
  
  const handleLoginForm = async () => {
    if(validateForm()){
      let user: Tuser = {
        email: email,
        password: password
      }
      const response = await loginUser(user);
      if(response.msg){
        if(response.msg.status == "proprietaire"){
          router.replace('/dashboard')
        }else{
          router.replace('/')
        }
      }else{
        Alert.alert('Erreur de connexion','Email ou mot de passe different', [
          {
            text: 'Reessayer',
            onPress: () => router.push('/Login')
          }
        ])
      }

      setEmail("");
      setPassword("");
    }
  }
  
  return (
    <SafeAreaView className="flex-1 bg-white px-5 space-y-4">
      <TouchableOpacity
        className="w-8 h-8 bg-gray-100 rounded mt-10 items-center justify-center self-end"
        onPress={() => navigation.goBack()}
      >
        <FontAwesome5 name="times" size={20} color="gray" />
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
        <TextInput
          placeholder="test@example.com"
          keyboardType="email-address"
          value={email} onChangeText={setEmail}
          className="bg-gray-300/20 px-4 rounded py-2"
        />
        {errors.email ? <Text className="text-red-600">{errors.email}</Text> : null}
      </View>
      <View className="space-y-1">
        <Text>Votre mot de passe</Text>
        <TextInput
          placeholder="********"
          value={password} onChangeText={setPassword}
          className="bg-gray-300/20 px-4 rounded py-2"
          secureTextEntry={true}
        />
        {errors.password ? <Text className="text-red-600">{errors.password}</Text> : null}
      </View>
      <Text className="text-xs self-end">Mot de passe oublier ?</Text>
      <TouchableOpacity className="bg-primary rounded-xl p-3" onPress={handleLoginForm}>
        <Text className="text-lg text-white text-center">Connexion</Text>
      </TouchableOpacity>
      <View className="flex-row space-x-1">
        <Text>Vous n'avez pas de compte ?</Text>
        <Link href="/(auth)/Singup" asChild>
          <TouchableOpacity>
            <Text className="text-primary">Inscrivez-vous</Text>
          </TouchableOpacity>
        </Link>
      </View>
      <Text className="self-center text-gray-500">Or Sign In With</Text>
      <View className="flex-row justify-around">
        <TouchableOpacity className="w-28 items-center border border-gray-500 p-2 rounded-xl">
          <FontAwesome5 name="google" size={20} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity className="w-28 items-center border border-gray-500 p-2 rounded-xl">
          <FontAwesome5 name="facebook" size={20} color="gray" />
        </TouchableOpacity>
      </View>
      <Link href="/dashboard" asChild>
        <Text>Admin</Text>
      </Link>
    </SafeAreaView>
  );
}
