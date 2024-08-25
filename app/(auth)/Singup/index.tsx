import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { handleSingupForm, validateForm } from "@/lib/form/singup";
import { useState } from "react";
import { Tuser } from "@/lib/definition";
import { singupUser } from "@/lib/api/userApi";
import ModaleDone from "@/components/Singup/ModalDone";
import BouncyCheckbox from 'react-native-bouncy-checkbox'

export default function Page() {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false)

  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(false);
  const [errors, setErrors] = useState<Tuser>({});

  const validateForm = () => {
    let error: Tuser = {};

    if (!nom) error.nom = "Nom requis";
    if (!email) error.email = "Email requis";
    if (!telephone) error.telephone = "Téléphone requis";
    if (!password) error.password = "Mot de passe requis";
    console.log(status);
    

    setErrors(error);

    return Object.keys(error).length == 0;
  };

  const handleSingupForm = () => {
    if (validateForm()) {
      let user: Tuser = {
        nom: nom,
        email: email,
        telephone: telephone,
        password: password,
        status: status ? "proprietaire" : "visiteur"
      };
      singupUser(user);

      setNom("");
      setEmail("");
      setTelephone("");
      setPassword("");
      setErrors({});

      alert('Inscription reussis');
      // setShowModal(true)
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* {showModal && ModaleDone(true)} */}
      <ScrollView>
        <View className="px-5 space-y-3">
          <TouchableOpacity
            className="w-8 h-8 bg-gray-100 rounded items-center justify-center self-end mt-5"
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
            <Text>Nom</Text>
            <TextInput
              placeholder="Entrez votre nom"
              className="bg-gray-300/20 px-4 rounded py-2"
              value={nom}
              onChangeText={setNom}
            />
            {errors.nom ? (
              <Text className="text-red-600">{errors.nom}</Text>
            ) : null}
          </View>
          <View className="space-y-1">
            <Text>Email</Text>
            <TextInput
              placeholder="test@example.com"
              keyboardType="email-address"
              className="bg-gray-300/20 px-4 rounded py-2"
              value={email}
              onChangeText={setEmail}
            />
            {errors.email ? (
              <Text className="text-red-600">{errors.email}</Text>
            ) : null}
          </View>
          <View className="space-y-1">
            <Text>Telephone</Text>
            <TextInput
              placeholder="Entrez votre numero de telephone"
              keyboardType="phone-pad"
              className="bg-gray-300/20 px-4 rounded py-2"
              value={telephone}
              onChangeText={setTelephone}
            />
            {errors.telephone ? (
              <Text className="text-red-600">{errors.telephone}</Text>
            ) : null}
          </View>
          <View className="space-y-1">
            <Text>Mot de passe</Text>
            <TextInput
              placeholder="********"
              secureTextEntry={true}
              className="bg-gray-300/20 px-4 rounded py-2"
              value={password}
              onChangeText={setPassword}
            />
            {errors.password ? (
              <Text className="text-red-600">{errors.password}</Text>
            ) : null}
          </View>
          <View className="space-y-1">
            <Text>Inscrivez vous en tant que proprietaire (Optionel)</Text>
            <BouncyCheckbox
              size={28}
              fillColor="#FF4EA5"
              unFillColor="#fff"
              text="Proprietaire"
              iconStyle={{ borderColor: "red" }}
              innerIconStyle={{ borderWidth: 2 }}
              onPress={() => setStatus(!status)}
            />
          </View>
          <TouchableOpacity
            className="bg-primary rounded-xl p-3"
            onPress={handleSingupForm}
          >
            <Text className="text-lg text-white text-center">Inscription</Text>
          </TouchableOpacity>
          <View className="flex-row space-x-1">
            <Text>Vous avez deja un compte ?</Text>
            <Link href="/Login" asChild>
              <TouchableOpacity>
                <Text className="text-primary">Connectez-vous</Text>
              </TouchableOpacity>
            </Link>
          </View>
          <Text className="self-center text-gray-500">Or Sign Up With</Text>
          <View className="flex-row justify-around">
            <TouchableOpacity className="w-28 items-center border border-gray-500 p-2 rounded-xl">
              <FontAwesome5 name="google" size={20} color="gray" />
            </TouchableOpacity>
            <TouchableOpacity className="w-28 items-center border border-gray-500 p-2 rounded-xl">
              <FontAwesome5 name="facebook" size={20} color="gray" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
