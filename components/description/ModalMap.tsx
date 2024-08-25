import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Modal from "react-native-modal";

export default function ModalMap({type, lat, long, latDelta, longDelta}){
    const region = {
        latitude: lat,
        longitude: long,
        latitudeDelta: latDelta,
        longitudeDelta: longDelta,
      }

    const [showModal, setShowModal] = useState<boolean>(false);
    const handleShowModal = () => {
        setShowModal(!showModal)
    }
    return(
        <View>
            <TouchableOpacity className="flex-row items-center space-x-1" onPress={handleShowModal}>
                <Ionicons name="map" size={20} />
                <Text>Ouvrir la carte</Text>
            </TouchableOpacity>
            <Modal 
                isVisible={showModal}
                animationIn={"slideInLeft"}
                animationOut={"slideOutRight"} 
                className="flex-1 h-screen w-screen absolute -top-5 -left-5"
            >
                
                
                <View className="flex-1 rounded-md">
                    <TouchableOpacity className="p-2 absolute bg-red-500 top-0 left-0 z-40" onPress={handleShowModal}>
                        <Ionicons name="close" size={20} color='white' />
                    </TouchableOpacity>
                    <MapView className="flex-1" provider={PROVIDER_GOOGLE} initialRegion={region} region={region} showsUserLocation showsMyLocationButton>
                        <Marker pinColor="#FF4EA5" coordinate={region} title={`${type} a louer`} />
                    </MapView>
                </View>
            </Modal>
        </View>
    );
}