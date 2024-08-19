import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function BtnMail() {
  return (
    <Link href='/Login' asChild>
        <TouchableOpacity className="w-8 h-8 rounded-full bg-white items-center justify-center">
            <Ionicons name="mail" size={16} color='#FF4EA5' />
        </TouchableOpacity>
    </Link>
  )
}