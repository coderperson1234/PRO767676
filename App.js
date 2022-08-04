import { StatusBar } from 'expo-status-bar';
import { render } from 'react-dom';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity} from 'react-native';
import {createStackNavigator}
import {WebView} from 'react-native-webview'
export default function App() {
  return (
    
    <View style={styles.container}>
    <WebViewscalesPageToFit={true}
    source={{uri: path}}
    style={{marginTop: 20, marginBottom: 20, }}/> 
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
