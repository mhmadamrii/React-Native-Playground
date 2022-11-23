import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";

export default function TheNet() {
  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.texts}>Hello world</Text>
          <Text style={styles.texts}>Hello world</Text>
          <Text style={styles.texts}>Hello world</Text>
          <Text style={styles.texts}>Hello world</Text>
          <Text style={styles.texts}>Hello world</Text>
          <Text style={styles.texts}>Hello world</Text>
          <Text style={styles.texts}>Hello world</Text>
          <Text style={styles.texts}>Hello world</Text>
          <Text style={styles.texts}>Hello world</Text>
          <Text style={styles.newest}>Hello world</Text>
          <Text style={styles.newest}>Hello world</Text>
          <Text style={styles.newest}>Hello world</Text>
          <Text style={styles.newest}>Hello world</Text>
          <Text style={styles.newest}>Hello world</Text>
          <Text style={styles.newest}>Hello world</Text>
          <Text style={styles.newest}>Hello world</Text>
          <Text style={styles.newest}>Hello world</Text>
          <Text style={styles.newest}>Hello world</Text>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "aliceblue",
    flex: 1,
  },
  texts: {
    padding: 10,
    backgroundColor: "salmon",
    marginBottom: 20,
  },
  newest: {
    padding: 10,
    backgroundColor: "maroon",
    marginBottom: 20,
  },
});
