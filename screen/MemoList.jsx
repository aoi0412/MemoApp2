import React, { useState, useLayoutEffect } from "react";
import { FAB, Button } from "react-native-paper";
import { Alert, View } from "react-native";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import Memo from "../conp/Memo";

export default function MemoList(props) {
  const { navigation, input } = props;
  const [memos, setMemos] = useState([]);

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
      <View style={{ flex: 1 }}>
        <Memo />
        <FAB
          icon="plus"
          label="Create New Memo"
          uppercase={false}
          onPress={() => {
            navigation.navigate("Home");
          }}
          style={{ position: "absolute", margin: 16, bottom: 30, alignSelf: "center" }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
