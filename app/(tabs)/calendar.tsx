import { Calendar } from "react-native-calendars";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page(){
    return(
        <SafeAreaView className="flex-1 justify-center px-4">
            <Calendar />
        </SafeAreaView>
    );
}