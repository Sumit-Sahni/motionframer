import firebase from 'firebase/compat/app';
import 'firebase/firestore';
import 'firebase/compat/firestore';


// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAm-iGmNfRJmfZaQYCCNqRIYYQYDIc9A-Q",
  authDomain: "resume-9fbed.firebaseapp.com",
  projectId: "resume-9fbed",
  storageBucket: "resume-9fbed.appspot.com",
  messagingSenderId: "70780724500",
  appId: "1:70780724500:web:c738db67de5c4d2fbb4e01"
};



// Initialize Firebase

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();

export { db};