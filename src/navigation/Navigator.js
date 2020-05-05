import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import MainScreen from '../screens/MainScreen'
import Example_1_Views from '../screens/Example_1_Views'
import Example_1_Views_Without from '../screens/Example_1_Views_Without'
import Example_2_Flatlist from '../screens/Example_2_Flatlist'
import Example_2_Flatlist_Without from '../screens/Example_2_Flatlist_Without'


const Stack = createStackNavigator();

export default function MyStack() {

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false // desabilita para todas as telas
                }}>
                <Stack.Screen
                    name='MainScreen'
                    component={MainScreen}
                    options={{
                        title: 'MainScreen',
                        //headerShown: false //desabilita apenas para uma tela
                    }}
                />
                <Stack.Screen
                    name='Example_1_Views'
                    component={Example_1_Views}
                    options={{
                        title: 'Example_1_Views',

                    }}
                />
                <Stack.Screen
                    name='Example_1_Views_Without'
                    component={Example_1_Views_Without}
                    options={{
                        title: 'Example_1_Views_Without',

                    }}
                />
                <Stack.Screen
                    name='Example_2_Flatlist'
                    component={Example_2_Flatlist}
                    options={{
                        title: 'Example_2_Flatlist',

                    }}
                />
                <Stack.Screen
                    name='Example_2_Flatlist_Without'
                    component={Example_2_Flatlist_Without}
                    options={{
                        title: 'Example_2_Flatlist_Without',

                    }}
                />


            </Stack.Navigator>
        </NavigationContainer>
    )
}
