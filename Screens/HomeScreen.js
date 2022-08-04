import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity} from 'react-native';
import {createStackNavigator}
export default class App extends React.Component {3
  render() {
  return (
    <View style={styles.container}>
     <ImageBackground source={require("../assets/photo.png")}> </ImageBackground>
     <TouchableOpacity onPress> 
     </TouchableOpacity>
    <Text> 
     Button1
     </Text>
    </View>
    );
  }
}
