import { Troom } from "@/lib/definition";
import { View, ActivityIndicator, FlatList, ListRenderItem } from "react-native";
import CardRoom from "../CardRoom";
import { useFetchData } from "@/lib/api/roomsApi";


export default function RoomList() {

    const { data, loading, error} = useFetchData()

    const renderItem: ListRenderItem<Troom> = ({ item }) => (
        <CardRoom
            id={item.id}
            type={item.type}
            prix={item.prix}
            description={item.description}
            photo={item.photo}
            ville={item.ville}
            bigCard={false}
        />
    );
  return (
    <View className="h-72">
        {
            loading ? <View className="h-full items-center justify-center">
                    <ActivityIndicator size={100} color='#FF4EA5' />
                </View> :
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data}
                contentContainerStyle={{ rowGap: 10 }}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
            />
        }
    </View>
  )
}