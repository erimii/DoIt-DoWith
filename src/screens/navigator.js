import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer, DefaultTheme, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { windowWidth } from '../values';

import Login from '../screens/Login';

import Home from '../screens/Home';
import ChatRoom from '../screens/ChatRoom';
import ChatRoomDrawer from './ChatRoomDrawer';
import Certification from '../screens/Certification';

import Mission from '../screens/Mission';
import MissionDetail from '../screens/MissionDetail';

import Friend from '../screens/Friend';

import Other from '../screens/Other';
import Alert from '../screens/Alert';

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: '#ffffff',
    },
};

const noHeaderOptions = {
    headerShown: false
}

// const LoginStack = () => {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen
//                 name="Login"
//                 component={Login}
//                 options={noHeaderOptions}
//             />
//         </Stack.Navigator>
//     );
// };

const MainStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
                options={noHeaderOptions}
            />

            <Stack.Screen
                name='Tabs'
                component={Tabs}
                options={noHeaderOptions}
            />

            {/* Home */}

            <Stack.Screen
                name="ChatRoom"
                component={ChatRoom}
            />
            <Stack.Screen
                name="Certification"
                component={Certification}
                options={{ title: 'Certification' }}
            />

            {/* mission */}

            <Stack.Screen
                name="MissionDetail"
                component={MissionDetail}
                options={{ title: 'MissionDetail' }}
            />

            {/* other */}

            <Stack.Screen
                name="Alert"
                component={Alert}
                options={{ title: 'Alert' }}
            />

        </Stack.Navigator>
    )
}


const Tabs = () => {
    return (
        <BottomTab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 56,
                    elevation: 10,
                }
            }}
        >
            <BottomTab.Screen
                name="Home"
                component={Home}
            />
            <BottomTab.Screen
                name="Mission"
                component={Mission}
            />
            <BottomTab.Screen
                name="Friend"
                component={Friend}
            />
            <BottomTab.Screen
                name="Other"
                component={Other}
            />
        </BottomTab.Navigator>
    );
};

const MainNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerPosition: "right",
                drawerType: "front",
                headerShown: false,
                drawerStyle: {
                    width: windowWidth - 8
                }
            }}
            drawerContent={(props) => <ChatRoomDrawer props={props} />}
        >
            <Drawer.Screen
                name="MainStack"
                component={MainStack}
            />
        </Drawer.Navigator>
    )
}


export default () => {
    
    return (
        <NavigationContainer theme={MyTheme} >
            <MainNavigator /> 
        </NavigationContainer>
    )
}