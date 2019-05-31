import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAsoQWyJLmrXR5txurUDrERnRelf7_YLFc",
    authDomain: "svigufo-38f8a.firebaseapp.com",
    databaseURL: "https://svigufo-38f8a.firebaseio.com",
    projectId: "svigufo-38f8a",
    storageBucket: "svigufo-38f8a.appspot.com",
    messagingSenderId: "286462942893",
    appId: "1:286462942893:web:dbe22fab3df849d3"
  };

  firebase.initializeApp(config);

  export default firebase;