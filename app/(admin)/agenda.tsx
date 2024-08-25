import React, {useState} from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import {Agenda, Calendar, LocaleConfig} from 'react-native-calendars';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App(){
  const [items, setItems] = useState({
    '2024-08-28': [{ name: 'Visite planifier', time: '10:00' }],
    '2024-08-24': [{ name: 'Visite planifier', time: '15:00' }, { name: 'Visite planifier', time: '12:00' }, { name: 'Visite planifier', time: '15:00' }],
    '2024-08-25': [{ name: 'Visite planifier', time: '17:00' }, { name: 'Visite planifier', time: '8:00' }],
    '2024-08-27': [{ name: 'Visite planifier', time: '9:00' }, { name: 'Visite planifier', time: '13:00' }],
  });

  const renderEmptyData = () => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>No events for this day</Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, marginHorizontal: 10 }}>
      <Agenda
        items={items}
        showOnlySelectedDayItems={true}
        renderEmptyData={renderEmptyData} 
        renderItem={(item) => (
          <View style={{ marginVertical: 10, marginTop: 30, backgroundColor: 'white', marginHorizontal: 10, padding: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
            <Text>{item.time}</Text>
          </View>
        )}
      />
    </View>
  );
};
