import React from "react";
import { Skeleton } from "@rneui/themed";
import { View, StyleSheet, Text } from "react-native";

export const HeaderSkeleton = () => {
  return (
    <View style={styles.main}>
      <Skeleton
        circle
        animation="wave"
        width={80}
        height={80}
        style={styles.circleSkeleton}
      />
      <Skeleton
        circle
        animation="wave"
        width={80}
        height={80}
        style={styles.circleSkeleton}
      />
      <Skeleton
        circle
        animation="wave"
        width={80}
        height={80}
        style={styles.circleSkeleton}
      />
      <Skeleton
        circle
        animation="wave"
        width={80}
        height={80}
        style={styles.circleSkeleton}
      />
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

export const ProductsSkeleton = () => {
  return (
    <View style={styles.productsSkeleton}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Skeleton
          animation="wave"
          width={150}
          height={100}
          style={styles.productsSkeletonSmall}
        />
        <Skeleton
          animation="wave"
          width={100}
          height={10}
          style={{ marginTop: 5 }}
        />
        <Skeleton
          animation="wave"
          width={150}
          height={10}
          style={{ marginTop: 5 }}
        />
      </View>

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Skeleton
          animation="wave"
          width={150}
          height={100}
          style={styles.productsSkeletonSmall}
        />
        <Skeleton
          animation="wave"
          width={100}
          height={10}
          style={{ marginTop: 5 }}
        />
        <Skeleton
          animation="wave"
          width={150}
          height={10}
          style={{ marginTop: 5 }}
        />
      </View>
    </View>
  );
};

export const CommingSoonSkeleton = () => {
  return (
    <>
      <Text
        style={{
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          fontSize: 50,
        }}
      >
        Comming Soon!
      </Text>
      <View style={styles.main}>
        <Skeleton
          circle
          animation="wave"
          width={80}
          height={80}
          style={styles.circleSkeleton}
        />
        <Skeleton
          circle
          animation="wave"
          width={80}
          height={80}
          style={styles.circleSkeleton}
        />
        <Skeleton
          circle
          animation="wave"
          width={80}
          height={80}
          style={styles.circleSkeleton}
        />
        <Skeleton
          circle
          animation="wave"
          width={80}
          height={80}
          style={styles.circleSkeleton}
        />
      </View>

      <View style={styles.productsSkeleton}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Skeleton
            animation="wave"
            width={150}
            height={100}
            style={styles.productsSkeletonSmall}
          />
          <Skeleton
            animation="wave"
            width={100}
            height={10}
            style={{ marginTop: 5 }}
          />
          <Skeleton
            animation="wave"
            width={150}
            height={10}
            style={{ marginTop: 5 }}
          />
        </View>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Skeleton
            animation="wave"
            width={150}
            height={100}
            style={styles.productsSkeletonSmall}
          />
          <Skeleton
            animation="wave"
            width={100}
            height={10}
            style={{ marginTop: 5 }}
          />
          <Skeleton
            animation="wave"
            width={150}
            height={10}
            style={{ marginTop: 5 }}
          />
        </View>
      </View>
    </>
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
  },
  bodySkeletonSmall: {
    marginBottom: 10,
  },
  circleSkeleton: {
    marginHorizontal: 2,
  },
  productsSkeleton: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  productsSkeletonSmall: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Skeleton;
