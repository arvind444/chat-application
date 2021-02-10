import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD_O7STOqp7DzlM7fNLs4eb_zcJ5xt5t64",
    authDomain: "chat-application-spak-c7623.firebaseapp.com",
    projectId: "chat-application-spak-c7623",
    storageBucket: "chat-application-spak-c7623.appspot.com",
    messagingSenderId: "380481227740",
    appId: "1:380481227740:web:a04837cdb2eee3d4cb5d19",
    measurementId: "G-2RSVZXR5RE"
  };

  const app = firebase.initializeApp(firebaseConfig);
  const database = app.firestore();

  export default database;