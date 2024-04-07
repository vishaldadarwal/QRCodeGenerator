import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { Splash } from '../screens/Splash';
import { Home } from '../screens/Home';
import { Navigationstack } from './Navigationstack';
import DrawerNavigator from './DrawerNavigator';



const Stack = createNativeStackNavigator();

const Mainstack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
          }}>
            <Stack.Screen name="Splash" component={Splash} screenOptions />
            {/* <Stack.Screen name="Home" component={Home} /> */}
            <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />

        </Stack.Navigator>
    )
}

export default Mainstack;
