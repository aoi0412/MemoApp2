import firebase from "firebase/compat";
import "firebase/firestore";
import { firebaseConfig } from "../env";

export default class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConfig);
  }

  createMemo = async ({ description, alertAt }) => {
    const createdAt = Date.now();
    this.memoCollection.add({
      description,
      alertAt,
      createdAt,
    });
  };

  get memoCollection() {
    return firebase.firestore().collection("memos");
  }
}
