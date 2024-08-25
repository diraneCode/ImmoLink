import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Calendar } from "react-native-calendars";
import Modal from "react-native-modal";

export default function Page(){
    const options = { weekday: 'short', month: 'long', day: 'numeric' };
    const today = new Date();
    const formattedDate = today.toLocaleDateString('fr-FR', options);
    const dateNow = today.toISOString().split('T')[0];
    const parts = formattedDate.split(' ');
    const finalDate = `${parts[0]}, ${parts[2]} ${parts[1]}`;
    
    const [selected, setSelected] = useState(dateNow.toString());

    const sendVisite = () => {
        alert("Votre demande de visite a ete envoye")
    }
    
    return(
        <Modal isVisible={true}
        animationIn={"bounce"}
        animationOut={"fadeOutLeftBig"} className="flex-1 justify-center px-6">
            <View className="h-[85%]">
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
                    <TouchableOpacity>
                        <Text className="text-xl text-blue-400">Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={sendVisite}>
                        <Text className="text-xl text-blue-400">OK</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}