import React, { useState } from "react";

import {
  Text,
  View,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
  TextInput,
  Button
} from "react-native";

export default function TheNet() {

  const [refresh, setRefresh] = useState(false)
  const [text, setText] = useState('some text')
  const [appear, setAppear] = useState(false)

  const handleSubmit = (textValue) => {
    setText(textValue)
    setAppear(false)
  }


  const pullRefresh = () => {
    setRefresh(true)

    setTimeout(() => {
      setRefresh(false)
    }, 3000)
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView refreshControl={
        <RefreshControl refreshing={refresh} onRefresh={pullRefresh} />
      }>
        <Text style={{ textAlign: 'center', fontSize: 30 }} >What do you think?</Text>
        <TextInput 
          style={{ height: 40, borderColor: 'black', borderWidth: 1, marginHorizontal: 20, padding: 5 }}
          placeholder="Input text here" 
          onChangeText={handleSubmit}
        />
        {appear &&
          <Text style={{ textAlign: 'center', fontSize: 30 }} >{text}</Text>
        }
        <Button title="Press to submit" onPress={() => setAppear(true)}/>
      </ScrollView>
    </View>
  )
}