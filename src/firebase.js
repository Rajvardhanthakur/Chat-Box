import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC3CVHsPxECntvuKDJigvRcBGUyhwhuRzw",
  authDomain: "facebook-messenger-clone-239f3.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-239f3.firebaseio.com",
  projectId: "facebook-messenger-clone-239f3",
  storageBucket: "facebook-messenger-clone-239f3.appspot.com",
  messagingSenderId: "241843275472",
  appId: "1:241843275472:web:4f3b7bcfcf4183125c40d5",
  measurementId: "G-V19T0HTZ2S"
});

const db = firebaseApp.firestore();

export default db;