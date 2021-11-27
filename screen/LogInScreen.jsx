import React, { useEffect } from "react";
import firebase from "firebase/compat";
import { View, Text } from "react-native";

export default function LogInScreen(props) {
  const { navigation } = props;

  useEffect(() => {
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
