// app/App.js
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { ThemeProvider } from './app/context/ThemeContext';
import Login from './app/screens/LoginScreen';
import OtpScreen from './app/screens/OtpScreen';
import AppDrawer from './app/screens/Dashboard'; // Import AppDrawer
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();

export default function App() { 
  const [fontsLoaded, fontsError] = useFonts({
    'font-200': require('./app/assets/fonts/BricolageGrotesque-ExtraLight.ttf'),
    'font-300': require('./app/assets/fonts/BricolageGrotesque-Light.ttf'),
    'font-400': require('./app/assets/fonts/BricolageGrotesque-Regular.ttf'),
    'font-500': require('./app/assets/fonts/BricolageGrotesque-Medium.ttf'),
    'font-600': require('./app/assets/fonts/BricolageGrotesque-SemiBold.ttf'),
    'font-700': require('./app/assets/fonts/BricolageGrotesque-Bold.ttf'),
    'font-800': require('./app/assets/fonts/BricolageGrotesque-ExtraBold.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded || fontsError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontsError]);

  if (!fontsLoaded && !fontsError) {
    return null; // Display nothing until fonts are loaded
  }

  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="OtpScreen" component={OtpScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Dashboard" component={AppDrawer} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
