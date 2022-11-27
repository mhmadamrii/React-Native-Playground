import React from "react";
import Navigation from "./navigation/Navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "react-native-elements";

import { SafeAreaView } from "react-native-safe-area-context";


export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <ThemeProvider>
          <Navigation />
        </ThemeProvider>
      </SafeAreaProvider>
    </>
  )
}