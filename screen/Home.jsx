import React, { useState, useEffect } from "react";
import { TextInput, FAB } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import firebase from "firebase/compat";
import { Alert } from "react-native";

export default function Home(props) {
  const { navigation } = props;
  const [text, setText] = useState("");
  const [date, setDate] = useState(new Date());
  const currentUser = firebase.auth().currentUser;

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    console.log(currentDate);
  };

  function handlePress() {
    const db = firebase.firestore();
    const ref = db.collection(`users/${currentUser.uid}/memos`);
    if (text !== "") {
      ref
        .add({
          text: text,
          date: date,
        })
        .then(() => {
          navigation.reset({
            index: 0,
            routes: [{ name: "MemoList" }],
          });
        })
        .catch((error) => {
          Alert.alert(error.code);
        });
    } else {
      Alert.alert("メモが入力されていません", "メモ一覧へ移動しますか？", [
        {
          text: "Cancel",
          onPress: () => {
            console.log("Cancel Pressed");
          },
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            navigation.reset({
              index: 0,
              routes: [{ name: "MemoList" }],
            });
          },
        },
      ]);
    }
  }

  return (
    <React.Fragment>
      <TextInput
        mode="outlined"
        value={text}
        label="新しいメモを作成"
        multiline={true}
        height={200}
        style={{ margin: 12, backgroundColor: "#ffffff" }}
        autoFocus
        onChangeText={(text) => {
          setText(text);
        }}
      />
      <DateTimePicker
        value={date}
        mode="date"
        is24Hour={true}
        display="compact"
        onChange={onChange}
        disabled={true}
        style={{}}
      />
      <DateTimePicker
        minuteInterval={5}
        value={date}
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
