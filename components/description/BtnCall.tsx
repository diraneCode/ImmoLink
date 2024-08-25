import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import * as Linking from 'expo-linking';

export default function BtnCall({numero}) {
    const makeCall = () => {
        Linking.openURL(`tel:+237${numero}`);
    }
  return (
    <TouchableOpacity className="w-8 h-8 rounded-full bg-white items-center justify-center" onPress={makeCall}>
        <Ionicons name="call" size={16} color='#FF4EA5' />
    </TouchableOpacity>
  )
}