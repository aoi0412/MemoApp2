import React from "react";
import { FAB } from "react-native-paper";

export function MyFab(props) {
  const { nav, location, nowLocation } = props;
  if (nowLocation == "Home") {
    return (
      <FAB
        icon="check"
        onPress={() => {
          nav.reset({
            index: 0,
            routes: [{ name: "MemoList" }],
          });
        }}
        style={{ position: "absolute", margin: 16, right: 12, top: 230 }}
      />
    );
  } else if (nowLocation == "MemoList") {
    return (
      <FAB
        icon="plus"
        label="Create New Memo"
        uppercase={false}
        onPress={() => {
          nav.navigate(location);
        }}
        style={{ position: "absolute", margin: 16, bottom: 30, alignSelf: "center" }}
      />
    );
  }
}
