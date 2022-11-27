import React, { useState } from "react";
import {
  Text,
  Button,
  View,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal";

// required
import { Header, SearchBar, Icon } from "react-native-elements";
import Albion from "../../assets/albion.jpeg";
import Service from "../../assets/customer.png";
import Cardboard from "../../assets/cardboard-box.png";
import Food from "../../assets/food.png";
import Electronic from "../../assets/online-shop.png";

export default function Auth({ navigation }) {

  const [isShowModal, setIsShowModal] = useState(false)

  const showModal = () => {
    setIsShowModal(true)
  }

  const closeModal = () => {
    setIsShowModal(false)
  }

  return (
    <React.Fragment>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <TouchableOpacity>
                <Icon name="menu" color="#ffff" />
              </TouchableOpacity>
              <Text style={styles.brand}>ShopMee</Text>
            </View>
            <Icon name="store" color="#ffff" />
          </View>

          <TextInput placeholder="Search" style={styles.inputs} />
          <View style={styles.bottom}>
            <View style={styles.categoryLists}>
              <Image source={Electronic} style={styles.imageLists} />
              <Image source={Service} style={styles.imageLists} />
              <Image source={Cardboard} style={styles.imageLists} />
              <Image source={Food} style={styles.imageLists} />
            </View>

            <View>
              <TouchableOpacity style={styles.btnCheckout} onPress={showModal}>
                <Text style={{ color: "#ffff" }}>Checkout Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>

      <Modal isVisible={isShowModal}>
        <View style={styles.modalContainer}>
          <Text>it's modal</Text>
          <TouchableOpacity style={styles.btnCheckout} onPress={closeModal}>
            <Text style={{ color: '#ffff' }}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D4C92",
  },
  header: {
    marginTop: "10%",
    height: 50,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 10,
    flex: 1,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  brand: {
    fontSize: 20,
    marginLeft: 10,
    color: "#ffff",
  },
  bottom: {
    borderColor: "black",
    flex: 1,
    marginTop: 10,
    borderRadius: 30,
    padding: 20,
    backgroundColor: "#EFF5F5",
    minHeight: "100%",
  },
  inputs: {
    height: 40,
    margin: 10,
    borderColor: "black",
    borderRadius: 10,
    backgroundColor: "#ffff",
    padding: 10,
  },
  categoryLists: {
    // borderWidth: 1,
    height: 100,
    borderRadius: 10,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  imageLists: {
    width: 60,
    height: 60,
    borderRadius: 400,
  },
  btnCheckout: {
    backgroundColor: "#0D4C92",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: '#ffff',
    borderRadius: 10,
    flex: 1,
    marginVertical: 50,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
