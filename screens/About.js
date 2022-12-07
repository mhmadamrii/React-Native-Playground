import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "magenta",
    height: 100,
  },
  touchable: {
    backgroundColor: "lightblue",
  },
});

export default function About({ navigation }) {
  return (
    <React.Fragment>
      <View>
        <Text>Lorem</Text>
        <Button title="See the Product" onPress={() => navigation.navigate("Product")} />
      </View>
    </React.Fragment>
  );
}
