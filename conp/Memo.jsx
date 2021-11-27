import React, { useState } from "react";
import { Card, Title, Text } from "react-native-paper";
import { View, FlatList, Alert } from "react-native";
import { dateToString } from "../utils";
import { shape, string, instanceOf, arrayOf } from "prop-types";
import { useNavigation } from "@react-navigation/native";

export default function Memo(props) {
  const { memos } = props;
  const navigation = useNavigation();
  const [text, setText] = useState(null);

  function renderItem({ item }) {
    if (text == null) {
      setText(item.text);
    }
    return (
      <React.Fragment>
        <Card
          onPress={() => {
            console.log(item.alertAt);
            navigation.navigate("MemoEdit", {
              id: item.id,
              text: item.text,
              date: item.date,
            });
          }}
          style={{ backgroundColor: "rgba(0,0,0,0)" }}
        >
          <Card.Content
            style={{
              position: "relative",
              paddingHorizontal: 0,
              paddingBottom: 30,
              paddingTop: 7,
              borderWidth: 1,
              borderRadius: 10,
              backgroundColor: "#ffffff",
              marginBottom: 10,
            }}
          >
            <Text
              style={{
                width: "100%",
                backgroundColor: "#ffffff",
                paddingHorizontal: 20,
                paddingVertical: 12,
              }}
            >
              {item.text}
            </Text>
            <Title
              style={{
                position: "absolute",
                right: 12,
                bottom: 0,
                fontSize: 12,
              }}
            >
              {dateToString(item.date)}に通知予定
            </Title>
          </Card.Content>
        </Card>
      </React.Fragment>
    );
  }
  return (
    <View style={{ height: "100%" }}>
      <FlatList data={memos} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </View>
  );
}

Memo.prototypes = {
  memos: arrayOf(
    shape({
      id: string,
      text: string,
      alertAt: instanceOf(Date),
    })
  ).isRequired,
};
