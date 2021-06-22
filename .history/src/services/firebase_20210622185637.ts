import firebase from "firebase/app";

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDUARb77gnBCDAwQ1487I5eS5Lp4TdV9aw",
    authDomain: "letmeask-52fcc.firebaseapp.com",
    databaseURL: "https://letmeask-52fcc-default-rtdb.firebaseio.com",
    projectId: "letmeask-52fcc",
    storageBucket: "letmeask-52fcc.appspot.com",
    messagingSenderId: "792548676625",
    appId: "1:792548676625:web:9b91a7cf81e6949f0f8db0"
  };

  firebase.initializeApp(firebaseConfig)

  export const auth = firebase.auth();
  export const database = firebase.database();