import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView, FlatList } from "react-native";

export default function TheNet() {

  const [people, setPeople] = useState([
    {
      id: 1, name: "John"
    },
    {
      id: 2, name: "Doe"
    },
    {
      id: 3, name: "Luigi"
    }
  ])

  return (
    <>
      <View style={styles.container}>
        <FlatList 
          data={people}
          renderItem={({ item }) => (
            <Text style={styles.texts}>{item.name}</Text>
          )}
        />
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
