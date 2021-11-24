import React from "react";
import { Card, TextInput, Title } from "react-native-paper";

export default function MemoHistory() {
  const text = "aiueo";
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
