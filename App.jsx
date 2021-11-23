import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { firebaseConfig } from "./env";
import firebase from "firebase";

import Home from "./screen/Home";
import MemoList from "./screen/MemoList";
import { Alert } from "react-native";

const Stack = createNativeStackNavigator();

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
      firebase.auth().signInAnonymously();
    } else {
      Alert.alert(user);
    }
  });
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
          <Stack.Screen name="MemoList" component={MemoList} options={{ title: "メモリスト" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
