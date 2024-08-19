import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Modal from "react-native-modal";

type Props = {
    toggle: boolean
};

export default function DeleteModal({toggle}: Props) {
  return (
    <Modal
      isVisible={toggle}
      animationIn={"bounce"}
      animationOut={"fadeOutLeftBig"}
    >
      <View className="w-3/2 h-[35%] p-4 rounded-xl overflow-hidden bg-white relative">
        <Text className="text-x text-center">Voulez-vous vraiment supprimer cette chambre ? </Text>
        <Text className="text-red-500 text-center">Attention cette action est irreversible</Text>
        <TouchableOpacity>
            <Text>Oui</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="absolute right-0 w-10 h-10 bg-red-500 justify-center items-center"
          onPress={toggle}
        >
          <Ionicons name="close" color="white" size={30} />
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
