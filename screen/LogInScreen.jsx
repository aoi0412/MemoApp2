import React, { useEffect } from "react";
import firebase from "firebase/compat";
import { View, Text } from "react-native";

export default function LogInScreen(props) {
  const { navigation } = props;

  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyC7LptGLMzEw1_3t0zIsG63RZfxTDA7yGY",
        authDomain: "memoapp2-d7878.firebaseapp.com",
        projectId: "memoapp2-d7878",
        storageBucket: "memoapp2-d7878.appspot.com",
        messagingSenderId: "278736358324",
        appId: "1:278736358324:web:eec2038242b1873ab6c0e1",
      });
    }

    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        firebase
          .auth()
          .signInAnonymously()
          .then((userCredintial) => {
            console.log("loginedas:" + userCredintial);
          });
      } else {
        console.log("log in as:", user.uid);
        navigation.reset({
          index: 0,
          routes: [{ name: "Home" }],
        });
      }
    });

    return unsubscribe;
  }, []);

  return (
    <View>
      <Text>LogIn</Text>
    </View>
  );
}
