import firebase from 'firebase';
var config = {
  /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyBVKqEydjfoqJxKuXacGpuIWsf8ESyvVYw",
  authDomain: "adfast-28c9c.firebaseapp.com",
  databaseURL: "https://adfast-28c9c.firebaseio.com",
  projectId: "adfast-28c9c",
  storageBucket: "adfast-28c9c.appspot.com",
  messagingSenderId: "490817639507",
  appId: "1:490817639507:web:56193b2c3d2fc95e45e2a6",
  measurementId: "G-JRPDCDJ36R",
};
var fire = firebase.initializeApp(config);

export default fire;
