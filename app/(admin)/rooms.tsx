import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity, View, Text, ScrollView, Image } from "react-native";
import Room from "../../components/Admin/Room";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import CardRoom from "@/components/Admin/CardRoom";

export default function Page() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 px-4 bg-background space-y-6">
      <View className="flex-row items-center justify-between">
        <View>
          <Text className="text-xl">Vos chambres</Text>
          <Text>Ici vous pouvez gerer vos chambres.</Text>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 10, padding: 10 }}
      >
        <CardRoom />
        <CardRoom />
        <CardRoom />
      </ScrollView>
    </SafeAreaView>
  );
}
