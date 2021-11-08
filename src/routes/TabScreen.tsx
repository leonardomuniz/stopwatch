import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import { header, headerScreen } from '../helpers/Headers';
import Pomodoro from '../pages/pomodoro/index';
import Settings from '../pages/settings/index';

const Tab = createBottomTabNavigator();

export default function TabScreen(): any {
    return (
        <Tab.Navigator screenOptions={({ route, navigation }) => ({
            tabBarIcon: ({ color, size }) => {
                let iconName;

                switch (route.name) {
                    case 'home':
                        iconName = 'clock';
                        break
                    case 'settings':
                        iconName = 'settings'
                        break
                }

                return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "#e07b19",
            tabBarInactiveTintColor: "#fad8b6",
            tabBarShowLabel: false,
            tabBarHideOnKeyboard: true,
            tabBarStyle: {
                display: "flex",
                backgroundColor: "#171717",
                borderColor: "#171717",
                borderTopColor: "#171717"
            }
        })} >
            <Tab.Screen name="home" component={Pomodoro} options={header} />
            <Tab.Screen name="settings" component={Settings} options={headerScreen} />
        </Tab.Navigator>
    )
}