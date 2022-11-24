import React from "react";
import { Text, View, TextInput, StyleSheet, Button, ActivityIndicator, ScrollView, RefreshControl } from "react-native";


export default function Home() {

  const [isLoading, setIsLoading] = React.useState(false)
  const [refresh, setRefresh] = React.useState(false)

  const pullRefresh = () => {
    setRefresh(true)

    setTimeout(() => {
      setRefresh(false)
    }, 1000)
  }

  return (
    <React.Fragment>
      <View style={styles.container}>
        <ScrollView refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={pullRefresh} />
        }>
          {isLoading &&
            <ActivityIndicator size="large" color="red" />
          }
          <TextInput placeholder="Username" style={styles.textInput} />
          <TextInput placeholder="Password" secureTextEntry={true} style={styles.textInput} />
          <Button title="Click here" onPress={() => setIsLoading(!isLoading)} style={{ backgroundColor: 'red' }} />
        </ScrollView>
      </View>
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    // marginBottom: 200
  },
  textInput: {
    borderWidth: 2,
    borderColor: 'black',
    width: 300,
    borderRadius: 50,
    padding: 15,
    marginBottom: 10,
    fontSize: 20
  }
})