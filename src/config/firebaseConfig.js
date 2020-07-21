import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyDKt8kcgZght5hHh0eSpBl8XK4Q3wcBXAk",
    authDomain: "todo-91b98.firebaseapp.com",
    databaseURL: "https://todo-91b98.firebaseio.com",
    projectId: "todo-91b98",
    storageBucket: "todo-91b98.appspot.com",
    messagingSenderId: "826330091020",
    appId: "1:826330091020:web:d6bed27e2e53a091a02829"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;