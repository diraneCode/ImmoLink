import React, {useState} from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import {Agenda, Calendar, LocaleConfig} from 'react-native-calendars';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App(){
  const [items, setItems] = useState({
    '2024-08-13': [{ name: 'Meeting with client', time: '10:00 AM' }],
    '2024-08-14': [{ name: 'Team brainstorming session', time: '9:00 AM' }, { name: 'Project presentation', time: '2:00 PM' }, { name: 'Project presentation', time: '5:00 PM' }],
    '2024-08-15': [{ name: 'Team brainstorming session', time: '9:00 AM' }, { name: 'Project presentation', time: '2:00 PM' }],
    '2024-08-1': [{ name: 'Team brainstorming session', time: '9:00 AM' }, { name: 'Project presentation', time: '2:00 PM' }],
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
