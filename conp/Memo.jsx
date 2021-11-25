import React, { useState } from "react";
import { Card, Menu, Divider, Title, TextInput, IconButton } from "react-native-paper";

export default function Memo() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [text, setText] = useState("aiueo");
  const input = React.createRef();
  return (
    <React.Fragment>
      <Menu
        visible={menuVisible}
        onDismiss={() => {
          setMenuVisible(false);
        }}
        style={{ flexDirection: "row-reverse" }}
        anchor={
          <Card>
            <Card.Content
              style={{
                position: "relative",
                paddingBottom: 48,
              }}
            >
              <TextInput
                mode="outlined"
                dense={false}
                multiline={true}
                value={text}
                ref={input}
                onChangeText={(text) => {
                  setText(text);
                }}
                style={{ backgroundColor: "#ffffff", width: "80%" }}
              />
              <Title
                style={{
                  position: "absolute",
                  right: 12,
                  bottom: 8,
                  fontSize: 12,
                }}
              >
                alertDateに通知予定
              </Title>
              <IconButton
                icon="dots-vertical"
                style={{ position: "absolute", right: 12, top: 12 }}
                onPress={() => {
                  setMenuVisible(true);
                }}
              />
            </Card.Content>
          </Card>
        }
      >
        <Menu.Item onPress={() => {}} title="削除" icon="delete" />
        <Menu.Item
          onPress={() => {
            setMode("outlined");
            setMenuVisible(false);
          }}
          title="編集"
          icon="pencil"
        />
        <Divider />
        <Menu.Item onPress={() => {}} title="通知時刻変更" icon="clock" />
      </Menu>
    </React.Fragment>
  );
}
