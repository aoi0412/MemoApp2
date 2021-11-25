import React from "react";
import { Card, TextInput, Title } from "react-native-paper";
import firebase from "firebase/compat";
export default function MemoHistory() {
  const text = "aiueo";

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        firebase.auth().signInAnonymously();
        // console.log("not sign in:" + user.uid);
      } else {
        console.log("sign in:" + user.uid);
      }
    });
  });
  return (
    <React.Fragment>
      <Card>
        <Card.Content
          style={{
            position: "relative",
            paddingBottom: 48,
          }}
        >
          <TextInput
            dense={true}
            disabled={true}
            value={text}
            style={{ backgroundColor: "#ffffff", width: "80%" }}
          />
          <Title
            style={{
              position: "absolute",
              right: 12,
              bottom: 12,
              fontSize: 12,
            }}
          >
            alertDateに通知済み
          </Title>
        </Card.Content>
      </Card>
    </React.Fragment>
  );
}
