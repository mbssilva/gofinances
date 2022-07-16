import React from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import { NavigationContainer } from "@react-navigation/native";

import AppLoading from "./src/screens/AppLoading";

// import {
//   useFonts,
//   Poppins_400Regular,
//   Poppins_500Medium,
//   Poppins_700Bold,
// } from "@expo-google-fonts/poppins";

import theme from "./src/global/styles/theme";

import { AppRoutes } from "./src/routes";

export default function App() {
  // const [fontsWereLoaded] = useFonts({
  //   Poppins_400Regular,
  //   Poppins_500Medium,
  //   Poppins_700Bold,
  // });

  // if (!fontsWereLoaded) return <AppLoading />;

  return (
    <>
      <StatusBar backgroundColor={theme.colors.primary} />
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <AppRoutes />
        </ThemeProvider>
      </NavigationContainer>
    </>
  );
}
