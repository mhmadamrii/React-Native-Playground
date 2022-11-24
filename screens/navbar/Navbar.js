import React from "react";
import { Text, View, StyleSheet, Image, Button } from "react-native";
import kambing from "../../assets/kambing.jpg";
import albion from "../../assets/albion.jpeg";
import { SafeAreaView } from "react-native-safe-area-context";
import Modal from "react-native-modal";

export default function Navbar() {
  const [isShowModal, setIsShowModal] = React.useState(false);

  return (
    <React.Fragment>
      <SafeAreaView>
        <View style={styles.container}>
          <View>
            <Image
              source={albion}
              style={styles.imgNav}
              onPress={() => setIsShowModal(true)}
            />
          </View>

          <View style={styles.right}>
            <Text style={styles.texts}>This is some Text</Text>
            <Text>
              Sint Lorem exercitation occaecat minim veniam tempor. Cillum Lorem
              fugiat deserunt id deserunt nisi velit officia commodo sunt fugiat
              non.{" "}
            </Text>
          </View>
        </View>

        <Button title="show" onPress={() => setIsShowModal(true)} />
        <Modal isVisible={isShowModal}>
          <Text>I am Modal</Text>
          <Button title="close" onPress={() => setIsShowModal(false)} />
        </Modal>
      </SafeAreaView>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  navLeft: {},
  right: {
    width: 300,
    color: "white",
    marginLeft: 20,
  },
  texts: {
    color: "white",
  },
  imgNav: {
    height: 50,
    width: 50,
    borderRadius: 400,
  },
});
