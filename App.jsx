import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { firebaseConfig } from "./env";
import firebase from "firebase/compat";

import Home from "./screen/Home";
import MemoList from "./screen/MemoList";
import MemoHistory from "./screen/MemoHistory";
import { Alert } from "react-native";
import { initializeApp } from "firebase/app";

const Stack = createNativeStackNavigator();

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
          <Stack.Screen name="History" component={MemoHistory} options={{ title: "メモ履歴" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
