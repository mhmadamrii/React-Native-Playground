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
  RefreshControl,
} from "react-native";
import Modal from "react-native-modal";

// required
import { Header, SearchBar, Icon } from "react-native-elements";
import { HeaderSkeleton, BodySkeleton } from "../global-function/Skeleton";

// assets
import Service from "../../assets/customer.png";
import Cardboard from "../../assets/cardboard-box.png";
import Food from "../../assets/food.png";
import Electronic from "../../assets/online-shop.png";
import Kambing from "../../assets/kambing.jpg";
import Pod from "../../assets/airPod.png";

export default function Auth({ navigation }) {
  const [isShowModal, setIsShowModal] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const showModal = () => {
    setIsShowModal(true);
  };

  const closeModal = () => {
    setIsShowModal(false);
  };

  const pullRefresh = () => {
    setRefresh(true);

    setTimeout(() => {
      setRefresh(false);
    }, 2000);
  };

  return (
    <React.Fragment>
      <View style={styles.container}>
        <ScrollView
          style={{ marginTop: 30 }}
          refreshControl={
            <RefreshControl refreshing={refresh} onRefresh={pullRefresh} />
          }
        >
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
            {refresh ? (
              <HeaderSkeleton />
            ) : (
              <View style={styles.categoryLists}>
                <Image source={Electronic} style={styles.imageLists} />
                <Image source={Service} style={styles.imageLists} />
                <Image source={Cardboard} style={styles.imageLists} />
                <Image source={Food} style={styles.imageLists} />
              </View>
            )}

            {refresh ? (
              <BodySkeleton />
            ) : (
              <>
                <View style={styles.carouselBanner}>
                  <Image source={Kambing} style={styles.banner} />
                </View>

                <View style={styles.specialDials}>
                  <View style={styles.specialDialsTop}>
                    <Text style={{ fontWeight: 'bold' }}>Special Dials</Text>
                    <Text style={{ color: 'red', fontWeight: 'bold' }}>See All</Text>
                  </View>

                  <View style={styles.specialDialsBottom}>
                    <Image source={Pod} style={{ width: 50, height: 50 }} />
                  </View>
                </View>
              </>
            )}
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
            <Text style={{ color: "#ffff" }}>Close</Text>
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
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "#ffff",
    borderRadius: 10,
    flex: 1,
    marginVertical: 50,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  carouselBanner: {
    marginTop: 20,
    marginBottom: 20,
    padding: 5,
    height: 150,
    borderRadius: 10,
    backgroundColor: "#ffff",
    justifyContent: "center",
    alignItems: "center"
  },
  banner: {
    width: 150,
    height: "100%",
    borderRadius: 10
  },
  specialDials: {
    borderWidth: 1,
    borderColor: 'red'
  },
  specialDialsTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },
  specialDialsBottom: {
    backgroundColor: '#D6E4E5'
  }
});
