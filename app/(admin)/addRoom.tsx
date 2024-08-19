import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Troom } from "@/lib/definition";
import { addRoom } from "@/lib/api/roomsApi";

export default function Page() {
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

    const [type, setType] = useState("");
    const [ville, setVille] = useState("");
    const [prix, setPrix] = useState("");
    const [nbChampre, setNbChambre] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState<Troom>();

    const validateRoom = () => {
        let errors: Troom = {
            id: 0,
            type: "",
            prix: 0,
            description: "",
            ville: "",
            // photo: "",
            nbChambre: 0
        }
        if(!type) errors.type = "Le type est requis"
        if(!ville) errors.ville = "La ville est requise"
        if(!prix) errors.prix = 0
        if(!nbChampre) errors.nbChambre = 0
        if(!description) errors.description = "La description est requise"
    
        setError(errors);
    
        return Object.keys(errors).length === 0
    }

    const handleCreateRoom = () => {
        if(validateRoom()){
            let room:Troom = {
                type: type || "",
                prix: prix || 0,
                description: description || "",
                ville: ville || "",
                // photo: photo || "",
                nbChambre: nbChampre || 0
            }
            addRoom(room);
            setType("")
            setPrix("")
            setDescription("")
            setVille("")
            setNbChambre("")
        }
    }


  return (
    <SafeAreaView className="flex-1 bg-white px-4 space-y-3 mt-1">
      <View className="flex-row items-center justify-between">
        <FontAwesome5
          name="chevron-left"
          color="black"
          size={20}
          onPress={() => navigation.goBack()}
        />
        <Text className="font-bold text-xl">Ajouter une proprieter</Text>
        <Text></Text>
      </View>
      <View className="space-y-4">
        <View className="space-y-1">
          <Text>Type de chanbre</Text>
          <TextInput
            placeholder="Studio"
            className="bg-gray-300/20 px-4 rounded py-3"
            value={type}
            onChangeText={setType}
          />
          {error?.type && <Text className="text-red-500">{error.type}</Text>}
        </View>
        <View className="space-y-1">
          <Text>Ville</Text>
          <TextInput
            placeholder="Ville"
            className="bg-gray-300/20 px-4 rounded py-3"
            value={ville}
            onChangeText={setVille}
          />
          {error?.ville && <Text className="text-red-500">{error.ville}</Text>}
        </View>
        <View className="flex-row justify-between">
          <View className="space-y-1 w-[45%]">
            <Text>Prix</Text>
            <TextInput
              placeholder="Prix"
              className="bg-gray-300/20 px-4 rounded py-3"
              value={prix}
              onChangeText={setPrix}
              keyboardType="number-pad"
            />
            {error?.prix && <Text className="text-red-500">{error.prix}</Text>}
          </View>
          <View className="space-y-1 w-[45%]">
            <Text>Nombre de chambre</Text>
            <TextInput
              placeholder="Ville"
              className="bg-gray-300/20 px-4 rounded py-3"
              value={nbChampre}
              onChangeText={setNbChambre}
              keyboardType="number-pad"
            />
            {error?.ville && <Text className="text-red-500">{error.ville}</Text>}
          </View>
        </View>
        <View className="space-y-1">
          <Text>Description</Text>
          <TextInput
            placeholder="Description"
            className="bg-gray-300/20 px-4 rounded py-3"
            multiline
            numberOfLines={5}
            value={description}
            onChangeText={setDescription}
          />
          {error?.description && <Text className="text-red-500">{error?.description}</Text>}
        </View>
        <View className="flex-row justify-between">
          <TouchableOpacity className="p-3 bg-blue-400 rounded-xl">
            <Text className="text-white text-xl text-center">Localisation</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="p-3 bg-blue-400 rounded-xl"
            onPress={pickImage}
          >
            <Text className="text-white text-xl text-center">
              Ajouter des photos
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity className="bg-primary rounded-xl p-3">
          <Text className="text-lg text-white text-center" onPress={handleCreateRoom}>
            Publier l'annonce
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
