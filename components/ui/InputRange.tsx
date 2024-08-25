import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Slider from '@react-native-community/slider';
import { useState } from 'react';

// expo install @react-native-community/slider

export default function InputRange() {
  const [sliderValue, setSliderValue] = useState("5");
  const minimumValue = 1;
  const maximumValue = 10;

  return (
    <View>
      <Slider style={{width: 200, height: 40}} 
        minimumValue={0} 
        maximumValue={10}
        onValueChange={(value) => setSliderValue(value)}
        onSlidingComplete={() => console.log("Sliding complete")}
        onSlidingStart={() => console.log("Sliding start")}
        step={0.5}
        // value={sliderValue}
        maximumTrackTintColor="#ff0000"
        minimumTrackTintColor="#00ff00"
      />
      <StatusBar style="auto" />
    </View>
  );
}
