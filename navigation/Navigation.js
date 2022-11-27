// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Routes
import Home from "../screens/Home";
import About from "../screens/About";
import Product from "../screens/Product";
import TheNet from "../screens/TheNet";
import { SafeAreaView } from "react-native-safe-area-context";


// random app
import Auth from "../screens/randomApp/Auth";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Homepage" component={Auth} options={{ title: "Homepage", headerShown: false }} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="net" component={TheNet} options={{ title: "The net ninja" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
