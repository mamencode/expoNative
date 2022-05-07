
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { Blurhash } from 'react-native-blurhash';
import * as TaskManager from "expo-task-manager"
import * as Location from "expo-location"
import HomeScreen from './screens/HomeScreen';


export default function App() {
  const [position, setPosition] = useState(null)
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const requestPermissions = async () => {
      const foreground = await Location.requestForegroundPermissionsAsync()
      if (foreground.granted) await Location.requestBackgroundPermissionsAsync()
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    }
    requestPermissions()
  }, [])
  return (
    <View style={styles.container}>
      {!location ? (<ActivityIndicator size="large" color="#00ff00" />) : (<HomeScreen />)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


//@react-native-mapbox-gl/maps

//expo install @rnmapbox/maps