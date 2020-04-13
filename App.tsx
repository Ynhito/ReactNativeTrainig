/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from "react";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Prank from "./App/pages/Prank/Prank";
import { FooterTab } from 'native-base';
import { Button } from 'native-base';
import { Icon } from 'native-base';
import Info from "./App/pages/Info/Info";
import Footer from './App/Components/Footer';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Prank" component={Prank} />
          <Stack.Screen name="Info" component={Info} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//     scrollView: {
//         backgroundColor: Colors.lighter,
//     },
//     engine: {
//         position: 'absolute',
//         right: 0,
//     },
//     body: {
//         backgroundColor: Colors.white,
//     },
//     sectionContainer: {
//         marginTop: 32,
//         paddingHorizontal: 24,
//     },
//     sectionTitle: {
//         fontSize: 24,
//         fontWeight: '600',
//         color: Colors.black,
//     },
//     sectionDescription: {
//         marginTop: 8,
//         fontSize: 18,
//         fontWeight: '400',
//         color: Colors.dark,
//     },
//     highlight: {
//         fontWeight: '700',
//     },
//     footer: {
//         color: Colors.dark,
//         fontSize: 12,
//         fontWeight: '600',
//         padding: 4,
//         paddingRight: 12,
//         textAlign: 'right',
//     },
// });

export default App;
