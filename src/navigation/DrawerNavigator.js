import React,{useEffect, useState} from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from '../screens/Home';
import BottomNavigator from './BottomNavigator';
import CustomDrawer from './CustomDrawer';
import { useNavigation } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const navigation = useNavigation();

  const [headerTitle, setHeaderTitle] = useState('');

  useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', (e) => {
      // Get the selected screen name
      const selectedScreen = navigation.getCurrentRoute().name;
      console.log("name000---",navigation)
      // Set the header title based on the selected screen
      setHeaderTitle(selectedScreen);
    });

    return unsubscribe;
  }, [navigation]);
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}/>}  >
        <Drawer.Screen name="Bottom" 
        component={BottomNavigator} 
        options={({ route }) => ({
          headerShown: true,
          title: headerTitle || route.state?.routes[route.state.index]?.name || 'Default Title'
        })}        />
    </Drawer.Navigator>
  )
}


export default DrawerNavigator
