import React, { useRef, useState, useEffect } from "react";
import {
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
  Pressable,
  SafeAreaView,
  Dimensions,
  Animated
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import MapboxGL from "@react-native-mapbox-gl/maps";
MapboxGL.setAccessToken(
    "pk.eyJ1IjoibWFtZW5jb2RlIiwiYSI6ImNrbmMyNDhmbzF4ZHIyd282NDJ5cDl4dmEifQ.kB0rN0t8PgA822CqczbbqQ"
  );
  const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;



export default function HomeScreen() {
  return (
    <SafeAreaView>
      <MapboxGL.MapView
        styleURL={MapboxGL.StyleURL.Street}
        zoomLevel={10}
        centerCoordinate={[38.763611, 9.005401]}
        showUserLocation={true}
        style={{ flex: 1 }}
      >
        <MapboxGL.Camera
          zoomLevel={13}
          centerCoordinate={[38.763611, 9.005401]}
        ></MapboxGL.Camera>
      </MapboxGL.MapView>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})