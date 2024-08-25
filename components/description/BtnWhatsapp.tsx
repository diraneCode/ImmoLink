import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import * as Linking from 'expo-linking';

export default function BtnWhatsapp({numero, image, localisation}){
    const sendWhatsAppMessage = () => {
        const phoneNumber = '+237696571842'; // Numéro de téléphone
        const message = `Je suis interresser par votre chambre de ${localisation}`; // Message
        const imageUrl = image; // URL de l'image sur le serveur
        const url = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message + ' ' + imageUrl)}`;
    
        Linking.openURL(url).catch(err => console.error('An error occurred', err));
      };
    return(
        <TouchableOpacity className="w-8 h-8 rounded-full bg-white items-center justify-center" onPress={sendWhatsAppMessage}>
            <Ionicons name="logo-whatsapp" size={16} color='green' />
        </TouchableOpacity>
    )
}