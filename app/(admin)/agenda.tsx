import React, {useState} from 'react';
import {Agenda, Calendar, LocaleConfig} from 'react-native-calendars';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {

  return (
    <Agenda
      items={{
        '2024-08-02': [{name: 'item 1 - any js object'}],
        '2024-08-03': [{name: 'item 2 - any js object', height: 80}],
        '2024-08-04': [],
        '2024-08-05': [{name: 'item 3 - any js object'}, {name: 'any js object'}]
      }}
      minDate={'2024-06-10'}
      maxDate={'2024-08-30'}
      markedDates={{
        '2024-08-02': {selected: true, marked: true},
        '2024-08-03': {selected: true, marked: true},
        '2024-08-04': {disabled: true}
      }}
      theme={{
        agendaDayTextColor: 'yellow',
        agendaDayNumColor: 'green',
        agendaTodayColor: 'red',
        agendaKnobColor: 'blue',
      }}
      
    />
  );
};

export default App;