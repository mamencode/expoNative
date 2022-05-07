
import  React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Blurhash } from 'react-native-blurhash';
import * as TaskManager from "expo-task-manager"
import * as Location from "expo-location"


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
    <Blurhash
      blurhash="LGFFaXYk^6#M@-5c,1J5@[or[Q6."
      style={{flex: 1}}
    />
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