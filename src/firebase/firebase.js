import firebase from 'firebase'

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB_PSrC5ucNuwiqCsudHZSn1mqNF6Ms-as",
  authDomain: "catan-484ab.firebaseapp.com",
  databaseURL: "https://catan-484ab.firebaseio.com",
  projectId: "catan-484ab",
  storageBucket: "catan-484ab.appspot.com",
  messagingSenderId: "853628889150"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);