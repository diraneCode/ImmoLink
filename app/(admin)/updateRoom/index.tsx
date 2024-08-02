import { useNavigation } from 'expo-router';
import { Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Icon from 'react-native-feather'

export default function Page(){
    const navigation = useNavigation()
    return (
        <SafeAreaView>
            <TouchableOpacity className="w-8 h-8 bg-slate-100 rounded-full items-center justify-center"
                onPress={() => navigation.goBack()}
                >
                    <Icon.ArrowLeft width={15} height={15} color={'black'} />
                </TouchableOpacity>
            <Text>Update Room</Text>
        </SafeAreaView>
    );
}

