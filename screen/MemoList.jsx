import React, { useState, useLayoutEffect, useEffect } from "react";
import { FAB, Button } from "react-native-paper";
import { Alert, View } from "react-native";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import Memo from "../conp/Memo";
import firebase from "firebase/compat";

export default function MemoList(props) {
  const { navigation } = props;
  const [memos, setMemos] = useState([]);

  useEffect(() => {
    const currentUser = firebase.auth().currentUser;
    const db = firebase.firestore();
    let unsubscribe = () => {};
    if (currentUser) {
      const ref = db.collection(`users/${currentUser.uid}/memos`).orderBy("date", "asc");
      unsubscribe = ref.onSnapshot((snapshot) => {
        const userMemos = [];
        snapshot.forEach(
          (doc) => {
            const data = doc.data();
            userMemos.push({
              id: doc.id,
              text: data.text,
              date: data.date.toDate(),
            });
            setMemos(userMemos);
            console.log(userMemos);
          },
          (error) => {
            console.log(error);
            setIsLoading(false);
            Alert.alert("データの読み込みに失敗しました。");
          }
        );
      });
    }
    return unsubscribe;
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          children="メモ履歴"
          onPress={() => {
            navigation.navigate("History");
          }}
        />
      ),
    });
  });

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={{ flex: 1, padding: 24, flexDirection: "column-reverse" }}>
        <Memo memos={memos} />
        <FAB
          icon="plus"
          // label="Create New Memo"
          uppercase={false}
          onPress={() => {
            navigation.navigate("Home");
          }}
          style={{ position: "absolute", margin: 16, bottom: 30, right: 0 }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
