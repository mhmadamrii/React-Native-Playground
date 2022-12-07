import React from "react";
import { Text, View, Button, StyleSheet, ScrollView } from "react-native";
import kambing from "../assets/kambing.jpg";

import Navbar from "./navbar/Navbar";


export default function Home({ navigation }) {
  return (
    <React.Fragment>
      <View style={styles.container}>
        <Navbar />

        <View style={styles.someText}>
          <ScrollView>
            <Text>Some text</Text>
            <Text>Proident velit ex fugiat sit reprehenderit non. Non nostrud consequat reprehenderit labore eu ea pariatur. Occaecat qui fugiat laboris ut nisi in aliquip proident adipisicing ad aliqua tempor tempor. Nulla cillum incididunt est fugiat. Proident in minim proident fugiat duis consequat nulla laboris reprehenderit tempor occaecat proident pariatur amet. Elit fugiat et cupidatat eiusmod reprehenderit exercitation proident velit aute.</Text>
          </ScrollView>
        </View>
      </View>
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7F669D',
    flex: 1
  },
  someText: {
    backgroundColor: 'white',
    marginTop: 50,
    borderRadius: 20,
    flex: 1,
    padding: 20
  }
})