import React from 'react';
import { View, Text, Button, ImageBackground, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from "react-native-vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

import Home from './screens/home/Home';
import CalmMain from './screens/calm/CalmMain';
import UnderstandMain from './screens/understand/UnderstandMain';
import ReleaseMain from './screens/release/ReleaseMain';
import CalmGuidedMeditation from './screens/calm/CalmGuidedMeditation';
import CalmAcupressure from './screens/calm/CalmAcupressure';
import CalmNew from './screens/calm/CalmNew';

const image = require('./assets/bg-lake.jpg');

const HomeStack = createStackNavigator();
const CalmStack = createStackNavigator();
const UnderstandStack = createStackNavigator();
const ReleaseStack = createStackNavigator();

const HomeStackScreen = () => (

  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} />
    <CalmStack.Screen name="CalmMain" component={CalmMain} />
    <UnderstandStack.Screen name="UnderstandMain" component={UnderstandMain} />
    <ReleaseStack.Screen name="ReleaseMain" component={ReleaseMain} />
  </HomeStack.Navigator>
)

const CalmStackScreen = () => (
  <CalmStack.Navigator>
    <CalmStack.Screen name="CalmMain" component={CalmMain} />
    <CalmStack.Screen name="CalmGuidedMeditation" component={CalmGuidedMeditation} />
    <CalmStack.Screen name="CalmAcupressure" component={CalmAcupressure} />
    <CalmStack.Screen name="CalmNew" component={CalmNew} />
  </CalmStack.Navigator>
)

const UnderstandStackScreen = () => (
  <UnderstandStack.Navigator>
    <UnderstandStack.Screen name="UnderstandMain" component={UnderstandMain} />
  </UnderstandStack.Navigator>
)

const ReleaseStackScreen = () => (
  <ReleaseStack.Navigator>
    <ReleaseStack.Screen name="ReleaseMain" component={ReleaseMain} />
  </ReleaseStack.Navigator>
)

function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: 'rgba(255,255,255,1)',
          inactiveTintColor: 'rgba(255,255,255,0.4)',
          activeBackgroundColor: 'rgba(51,53,58,1)',
          inactiveBackgroundColor: 'rgba(51,53,58,1)'
        }}>
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarLabel: 'HOME',
            tabBarIcon: ({ tintColor }) => (
              <Image source={require('./icons/home.png')}
              style={{width: 25, height: 25, tintColor: tintColor}} />  
            ),
          }} />
        <Tab.Screen
          name="Calm"
          component={CalmStackScreen}
          options={{
            tabBarLabel: 'CALM',
            tabBarIcon: ({ tintColor }) => (
              <Image source={require('./icons/calm.png')}
              style={{width: 26, height: 26, tintColor: tintColor}} />  
            ),
          }}
        />
        <Tab.Screen
          name="Understand"
          component={UnderstandStackScreen}
          options={{
            tabBarLabel: 'UNDERSTAND',
            tabBarIcon: ({ tintColor }) => (
              <Image source={require('./icons/understand.png')}
              style={{width: 25, height: 25, tintColor: tintColor}} />  
            ),
          }}
        />
        <Tab.Screen
          name="Release"
          component={ReleaseStackScreen}
          options={{
            tabBarLabel: 'RELEASE',
            tabBarIcon: ({ tintColor }) => (
              <Image source={require('./icons/release.png')}
              style={{width: 25, height: 25, tintColor: tintColor}} />  
            ),
          }}
        />
        <Tab.Screen
          name="More"
          component={ReleaseStackScreen}
          options={{
            tabBarLabel: 'MORE',
            tabBarIcon: ({ tintColor }) => (
              <Icon name="instagram" size={25} color='white' />
            ),
          }}
        />
        <Tab.Screen
          name="Favourite"
          component={ReleaseStackScreen}
          options={{
            tabBarLabel: 'FAVOURITE',
            tabBarIcon: ({ tintColor }) => (
              <Image source={require('./icons/more.png')}
              style={{width: 23, height: 23, tintColor: tintColor}} />  
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );

}

export default App;

