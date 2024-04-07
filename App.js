/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Mainstack from "./src/navigation/Mainstack";


function App() {
  return (
    <SafeAreaView style={{ flex:1 }}>
      <NavigationContainer>
        <Mainstack />
      </NavigationContainer>
    </SafeAreaView>
  );
}


export default App;
