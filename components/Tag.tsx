import { View, Text, TouchableOpacity, ScrollView } from "react-native";

export default function Tag(){
    return(
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-4 space-x-4">
            <TouchableOpacity className="px-6 bg-primary rounded-full">
                <Text className="text-lg text-white">Studio</Text>
            </TouchableOpacity>
            <TouchableOpacity className="px-6 bg-primary rounded-full">
                <Text className="text-lg text-white">Chambre</Text>
            </TouchableOpacity>
            <TouchableOpacity className="px-6 bg-primary rounded-full">
                <Text className="text-lg text-white">Etudiant</Text>
            </TouchableOpacity>
            <TouchableOpacity className="px-6 bg-primary rounded-full">
                <Text className="text-lg text-white">Studio</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}