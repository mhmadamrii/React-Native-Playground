import React from "react";
import { Text, View, StyleSheet  } from "react-native";

const styles = StyleSheet.create({
    main: {
        border: '1px solid'
    }
})

export default SecondPage = () => {
    return (
        <React.Fragment>
            <View style={styles.main}>
                <Text>This is SecondPage</Text>
            </View>
        </React.Fragment>
    )
}