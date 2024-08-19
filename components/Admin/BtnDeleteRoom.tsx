import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native'
import Modal from "react-native-modal";
import { deleteRoom } from '@/lib/api/roomsApi';
import { router } from 'expo-router';

type propsBtnDelete = {
    id?: number
}

export default function BtnDeleteRoom({ id }: propsBtnDelete) {
  const [showModal, setShowModal] = useState(false);
  const handleDeleteRoom = () => {
    deleteRoom(Number(id));
    router.replace('/(admin)/rooms')
  }
  return (
    <View>
        <TouchableOpacity className="w-11 h-11 items-center justify-center z-20 bg-red-500 rounded-xl" onPress={() => setShowModal(true)}>
            <Ionicons name="trash-bin" color="white" size={15} />
        </TouchableOpacity>
        <Modal
        isVisible={showModal}
        animationIn={"bounce"}
        animationOut={"fadeOutLeftBig"}
        >
        <View className="w-3/2 h-fit py-4 px-10 rounded-xl space-y-4 overflow-hidden bg-white relative">
          <Text className="text-x text-center">Voulez-vous vraiment supprimer cette chambre ? {id} </Text>
          <Text className="text-red-500 text-center">Attention cette action est irreversible</Text>
          <View className="flex-row self-center space-x-4">
            <TouchableOpacity className="py-2 px-5 rounded bg-red-500" onPress={handleDeleteRoom}>
                <Text className="text-white">Oui</Text>
            </TouchableOpacity>
            <TouchableOpacity className="py-2 px-5 rounded bg-blue-500" onPress={() => setShowModal(!showModal)}>
                <Text className="text-white">Non</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            className="absolute -top-5 right-0 w-10 h-10 bg-red-500 justify-center items-center"
            onPress={() => setShowModal(!showModal)}
          >
            <Ionicons name="close" color="white" size={30} />
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}