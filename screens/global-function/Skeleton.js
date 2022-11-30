import React from "react";
import { Skeleton } from "@rneui/themed";
import { View, StyleSheet } from "react-native";

export const HeaderSkeleton = () => {
  return (
    <View style={styles.main}>
      <Skeleton circle animation="wave" width={80} height={80} />
      <Skeleton circle animation="wave" width={80} height={80} />
      <Skeleton circle animation="wave" width={80} height={80} />
      <Skeleton circle animation="wave" width={80} height={80} />
    </View>
  );
};

export const BodySkeleton = () => {
  return (
    <View style={styles.bodySkeleton}>
      <Skeleton
        animation="wave"
        width={330}
        height={100}
        style={styles.bodySkeletonSmall}
      />
      <Skeleton
        animation="wave"
        width={330}
        height={30}
        style={styles.bodySkeletonSmall}
      />
      <Skeleton
        animation="wave"
        width={240}
        height={30}
        style={styles.bodySkeletonSmall}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  bodySkeleton: {
    marginBottom: 40,
    // borderWidth: 1,
    // borderColor: 'red'
    // justifyContent: "center",
    // alignItems: "center"
  },
  bodySkeletonSmall: {
    marginBottom: 10,
  },
});

export default Skeleton;
