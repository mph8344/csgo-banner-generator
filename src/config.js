import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/storage';

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCi3gtSt6U3k39y156wkjrewlb2DMxVfOo",
    authDomain: "csgo-banner-generator.firebaseapp.com",
    projectId: "csgo-banner-generator",
    storageBucket: "csgo-banner-generator.appspot.com",
    messagingSenderId: "751829184636",
    appId: "1:751829184636:web:f5d775aa3b5f69d16399f9",
    measurementId: "G-JWKF8WQRNK"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;


export { projectStorage, projectFirestore, timestamp };