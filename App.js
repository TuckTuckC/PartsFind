import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import { s } from 'react-native-wind';

import Home from './Screens/Home';
import List from './Screens/List';
import About from './Screens/About';

import Navigation from './config/navigation';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name='Home' component={Home}/>
      <Tabs.Screen name='List' component={List}/>
      <Tabs.Screen name='About' component={About}/>
    </Tabs.Navigator>
  )
}

export default function App() {
  return (
    <View style={s`p-5 w-full h-full`}>
        <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='BottomTabs' component={BottomTabs}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}