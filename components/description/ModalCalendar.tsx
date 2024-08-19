import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Calendar } from "react-native-calendars";
import Modal from "react-native-modal";

export default function ModalCalendar(){
    const options = { weekday: 'short', month: 'long', day: 'numeric' };
    const today = new Date();
    const formattedDate = today.toLocaleDateString('fr-FR', options);
    const dateNow = today.toISOString().split('T')[0];
    const parts = formattedDate.split(' ');
    const finalDate = `${parts[0]}, ${parts[2]} ${parts[1]}`;
    
    const [selected, setSelected] = useState(dateNow.toString());


    const [showModal, setShowModal] = useState<boolean>(false);
    const handleShowModal = () => {
        setShowModal(!showModal)
    }
    return(
        <View>
            <TouchableOpacity className="w-2/4 self-center rounded-full p-3 bg-primary px-5 flex-row  space-x-3" onPress={handleShowModal}>
                <Text className="text-center text-white">Demander une visite</Text>
                <Ionicons name="calendar-number-sharp" color="white" size={20} />
            </TouchableOpacity>
            <Modal 
                isVisible={showModal}
                animationIn={"slideInLeft"}
                animationOut={"slideOutRight"} 
                className="flex-1 justify-center px-2"
            >
                <View className="w-full h-[85%] justify-center">
                    <View className="w-full h-28 bg-blue-400 p-4">
                        <Text className="text-white text-xl">{today.getFullYear()}</Text>
                        <Text className="text-4xl text-white font-bold">{finalDate}</Text>
                    </View>
                    <Calendar
                        current={dateNow.toString()} 
                        markedDates={{
                        [selected]: { selected: true, marked: true, selectedColor: '#FF4EA5' }, 
                        }}
                        onDayPress={(day) => { setSelected(day.dateString) }} 
                    />
                    <View className="w-full h-14 bg-white justify-end px-8 space-x-4 py-4 flex-row">
                        <TouchableOpacity onPress={handleShowModal}>
                            <Text className="text-xl text-blue-400">Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleShowModal}>
                            <Text className="text-xl text-blue-400">OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}