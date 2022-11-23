import React from "react";
import { Text, View, Button } from "react-native";

export default function Home({ navigation }) {
  return (
    <React.Fragment>
      <Button title="The net ninja" onPress={() => navigation.navigate("net")} />
    </React.Fragment>
  )
}