import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import * as Linking from 'expo-linking';

export default function BtnWhatsapp(){
    const sendWhatsAppMessage = () => {
        const phoneNumber = '+237696571842'; // Numéro de téléphone
        const message = 'Nous envons trouver une chambre dans votre publication'; // Message
        const imageUrl = 'https://mega.nz/file/4wswHBSa#9pKTKXmxcHr1CsGE_YfwV7va8uesnlkVDFgfNHjSg5E'; // URL de l'image sur le serveur
        const url = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message + ' ' + imageUrl)}`;
    
        Linking.openURL(url).catch(err => console.error('An error occurred', err));
      };
    return(
        <TouchableOpacity className="w-8 h-8 rounded-full bg-white items-center justify-center" onPress={sendWhatsAppMessage}>
            <Ionicons name="logo-whatsapp" size={16} color='green' />
        </TouchableOpacity>
    )
}