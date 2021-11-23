import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MyFab } from "../conp/MyFab";

export default function MemoList(props) {
  const { navigation } = props;
  return (
    <React.Fragment>
      <MyFab nav={navigation} location={"Home"} nowLocation={"MemoList"} />
    </React.Fragment>
  );
}
