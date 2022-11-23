import React from "react";
import { Text, View, Button, Image } from "react-native";
import kambing from "../assets/kambing.jpg";

export default function Product({ navigation }) {
  return (
    <React.Fragment>
      <View>
        <Text>Product page</Text>
        <Text>How's your day?</Text>
        <Image
          // style={styles.stretch}
          source={require('../assets/kambing.jpg')}
        />
        <Button onPress={() => alert("Hello")} title="You're so amazing buddy" />
        <Button onPress={() => navigation.navigate("Homepage")} title="Navigate to home" />
      </View>
    </React.Fragment>
  );
}
