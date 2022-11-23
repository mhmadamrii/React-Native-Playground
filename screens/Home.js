import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import ToastManager, { Toast } from 'toastify-react-native'

// styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})


export default function Home() {

  const btnToast = () => {
    Toast.info('Successfully login', 'bottom')
  }

  return (
    <React.Fragment>
      <View style={styles.container}>
        <Text>Hello world</Text>
        <ToastManager />
        <Button onPress={btnToast} title="click to login" />
      </View>
    </React.Fragment>
  )
}