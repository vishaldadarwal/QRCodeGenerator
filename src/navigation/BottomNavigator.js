import {View, Text, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import { Home } from '../screens/Home';
import { Products } from '../screens/Products';
import { Cart } from '../screens/Cart';


const Bottom = createBottomTabNavigator();
const BottomNavigator = () => {
  return (
    <Bottom.Navigator>
      <Bottom.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
                <Text>A</Text>
            );
          },
        }}
      />
      <Bottom.Screen
        name="Product"
        component={Products}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
                <Text>B</Text>

            );
          },
        }}
      />
      <Bottom.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Text>C</Text>
            
            );
          },
        }}
      />
    </Bottom.Navigator>
  );
};

export default BottomNavigator;