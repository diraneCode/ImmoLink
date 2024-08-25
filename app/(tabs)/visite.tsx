import Visite from "@/components/Admin/Visite";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page(){
    return(
        <SafeAreaView className="px-4">
            <Text className="text-xl font-bold text-center mb-6">Vos visites</Text>
            <ScrollView>
                <Visite date='25/08/2024' />
                <Visite date='28/08/2024' />
                <Visite date='02/09/2024' />
            </ScrollView>
        </SafeAreaView>
    )
}