import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import Modal from "react-native-modal";

export default function ModaleDone(show: boolean) {
  const [isModalVisible, setModalVisible] = useState(show);

  const closeModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <Modal
      isVisible={isModalVisible}
      animationIn={"bounce"}
      animationOut={"fadeOutLeftBig"}
    >
      <View className="w-3/2 h-[35%] p-4 rounded-xl overflow-hidden bg-white relative">
        <View className="w-2/4 h-2/4 self-center">
          <Image
            source={require("@/assets/images/done.png")}
            className="w-full h-full object-cover"
          />
        </View>
        <Text className="text-2xl text-green-400 text-center">
          Inscription reussi !
        </Text>
        <Link href='/Login' className="text-center text-xl font-bold">
            Connectez vous
        </Link>
        <TouchableOpacity
          className="absolute right-0 w-10 h-10 bg-red-500 justify-center items-center"
          onPress={closeModal}
        >
          <Ionicons name="close" color="white" size={30} />
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
