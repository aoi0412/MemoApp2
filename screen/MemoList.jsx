import React, { useEffect, useState } from "react";
import { FAB } from "react-native-paper";
import { Alert } from "react-native";

export default function MemoList(props) {
  const { navigation } = props;
  const [memos, setMemos] = useState([]);

  return (
    <React.Fragment>
      <FAB
        icon="plus"
        label="Create New Memo"
        uppercase={false}
        onPress={() => {
          navigation.navigate("Home");
        }}
        style={{ position: "absolute", margin: 16, bottom: 30, alignSelf: "center" }}
      />
    </React.Fragment>
  );
}
