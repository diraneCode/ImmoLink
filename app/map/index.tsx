import React from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { StyleSheet, View, Text } from 'react-native';

export default function Page({lat, long, latDelta, longDelta}) {
  const region = {
    latitude: 4.07988768259959,
    longitude: 9.792106977560891,
    latitudeDelta: 0.0421,
    longitudeDelta: 0.0922,
  }
  return (
    <View className="flex-1">
      <MapView 
      style={StyleSheet.absoluteFill} provider={PROVIDER_GOOGLE} showsUserLocation showsMyLocationButton initialRegion={region} region={region} onPress={() => alert('Coordoonee ajoutes')}
      >
        <Marker coordinate={region} title='Maison a louer' />
      </MapView>
    </View>
  );
}
