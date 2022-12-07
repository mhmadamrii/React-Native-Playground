// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Icon } from "react-native-elements";

// random app
import Homepage from "../screens/randomApp/Homepage";
import Setting from "../screens/randomApp/Setting";
import Payments from "../screens/randomApp/Payments";

// Routing using tab navigator
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        activeColor="#e91e63"
        barStyle={{ backgroundColor: "red" }}
      >
        <Tab.Screen
          name="Homepage"
          component={Homepage}
          options={{
            headerShown: false,
            headerTitleAlign: "center",
            tabBarIcon: () => <Icon name="home" color="#0D4C92" size={40} />,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Setting}
          options={{
            headerShown: true,
            headerTitleAlign: "center",
            tabBarIcon: () => <Icon name="settings" size={40} />,
          }}
        />
        <Tab.Screen
          name="Payments"
          component={Payments}
          options={{
            tabBarIcon: () => <Icon name="payments" size={40} />,
            tabBarBadge: 5
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Setting}
          options={{
            headerShown: true,
            headerTitleAlign: "center",
            tabBarIcon: () => <Icon name="person" size={40} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
