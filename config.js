import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDWR2qTc9X3r_yF5rie23ow91SiNqBhTWc",
    authDomain: "e-ride-1b426.firebaseapp.com",
    projectId: "e-ride-1b426",
    storageBucket: "e-ride-1b426.appspot.com",
    messagingSenderId: "343228367388",
    appId: "1:343228367388:web:4465d60f065125f7f595d9"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
