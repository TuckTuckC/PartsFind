import React from 'react';
import { navigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Screens/Home';
import About from '../Screens/About';

HomeStack = createStackNavigator();
const HomeStackScreen = () => (
    <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={Home} />
        <HomeStack.Screen name="About" component={About} />
    </HomeStack.Navigator>
)

export default () => (
    <navigationContainer>
        <HomeStackScreen />
    </navigationContainer>
)