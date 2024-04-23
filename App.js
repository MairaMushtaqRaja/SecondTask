import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './Screen/Splash';
import Login from './Screen/Login';
import SignUp from './Screen/SignUp';

import Home from './Screen/Home';
import About from './Screen/About';
import Internship from './Screen/Internship';
import Web from './Screen/Web';
import Mobile from './Screen/Mobile';
import Graphic from './Screen/Graphic';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
        <Stack.Screen name='About' component={About} options={{headerShown:false}}/>
        <Stack.Screen name='Internship' component={Internship} options={{headerShown:false}}/>
        <Stack.Screen name='Web' component={Web} options={{headerShown:false}}/>
        <Stack.Screen name='Mobile' component={Mobile} options={{headerShown:false}}/>
        <Stack.Screen name='Graphic' component={Graphic} options={{headerShown:false}}/>
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
