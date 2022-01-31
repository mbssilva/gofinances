import React from 'react';
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

import theme from './src/global/styles/theme';

import { Dashboard } from './src/screens/Dashboard';
import { Register } from './src/screens/Register';

export default function App() {
  const [fontsWereLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if (!fontsWereLoaded) return <AppLoading />

  return (
    <>
      <StatusBar backgroundColor={theme.colors.primary} />
      <ThemeProvider theme={theme}>
        <Register />
      </ThemeProvider>
    </>

  );
}