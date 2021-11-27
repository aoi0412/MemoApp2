import React, { useState } from "react";
import { TextInput, FAB } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import firebase from "firebase/compat";
import { Alert } from "react-native";

export default function Home(props) {
  console.log(alertAt);
  const { navigation, route } = props;
  const { id, text, date } = route.params;
  const [input, setInput] = useState(text);
  const [alertAt, setAlertAt] = useState(date);

  const currentUser = firebase.auth().currentUser;
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setAlertAt(currentDate);
    console.log(currentDate);
  };

  function handlePress() {
    const db = firebase.firestore();
    const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
    ref
      .set(
        {
          text: input,
          date: alertAt,
        },
        { merge: true }
      )
      .then(() => {
        navigation.goBack();
      })
      .catch((error) => {
        Alert.alert(error.code);
      });
  }

  return (
    <React.Fragment>
      <TextInput
        mode="outlined"
        value={input}
        label="新しいメモを作成"
        multiline={true}
        height={200}
        style={{ margin: 12, backgroundColor: "#ffffff" }}
        autoFocus
        onChangeText={(input) => {
          setInput(input);
        }}
      />
      <DateTimePicker
        value={alertAt}
        mode="date"
        is24Hour={true}
        display="compact"
        onChange={onChange}
        disabled={true}
        style={{}}
      />
      <DateTimePicker
        minuteInterval={5}
        value={alertAt}
        mode="time"
        is24Hour={true}
        display="inline"
        onChange={onChange}
        disabled={true}
        style={{ height: 100, width: 260, right: 0 }}
      />
      <FAB
        icon="check"
        onPress={handlePress}
        style={{ position: "absolute", margin: 16, right: 12, top: 230 }}
      />
    </React.Fragment>
  );
}
