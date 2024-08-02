import React from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, View, Text } from 'react-native';

export default function Page() {
  return (
    <View className="flex-1">
      <MapView style={StyleSheet.absoluteFill} provider={PROVIDER_GOOGLE} showsUserLocation showsMyLocationButton />
    </View>
  );
}
