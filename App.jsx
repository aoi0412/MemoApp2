import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { firebaseConfig } from "./env";
import firebase from "firebase/compat";

import Home from "./screen/Home";
import MemoList from "./screen/MemoList";
import MemoEdit from "./screen/MemoEdit";
import MemoHistory from "./screen/MemoHistory";

const Stack = createNativeStackNavigator();

if (firebase.apps.length == 0) {
  firebase.initializeApp(firebaseConfig);
}

firebase
  .auth()
  .signInAnonymously()
  .then((userCredintial) => {
    const { user } = userCredintial;
    console.log("loginedas:" + user.uid);
  });

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    let uid = user.uid;
    console.log("あなたのIDは", uid, "です。");
  }
});

export default function App() {
  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: "tomato",
      accent: "yellow",
    },
  };
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{ title: "新しくメモを作成" }} />
          <Stack.Screen
            name="MemoList"
            component={MemoList}
            options={{
              title: "メモリスト",
            }}
          />
          <Stack.Screen name="MemoEdit" component={MemoEdit} options={{ title: "メモを編集" }} />
          <Stack.Screen name="History" component={MemoHistory} options={{ title: "メモ履歴" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
