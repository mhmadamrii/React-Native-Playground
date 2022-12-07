import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import Modal from "react-native-modal";

export default function Personal({ isShowModal }) {
  return (
    <React.Fragment>
      <View>
        <Modal isVisible={isShowModal}>
          <View style={styles.containerModal}>
            <Text>I am modal</Text>
            <Button title="I am button" />
          </View>
        </Modal>
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  containerModal: {
    width: 300,
    height: 200,
    backgroundColor: 'white'
  }
})
