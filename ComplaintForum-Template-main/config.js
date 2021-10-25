import firebase from 'firebase'
require("@firebase/firestore")
const firebaseConfig = {
  apiKey: "AIzaSyDvmkbDk6VpYoL0ZT_GBVcAY0Ovq2sGQ_Y",
  authDomain: "complaintforoum.firebaseapp.com",
  projectId: "complaintforoum",
  storageBucket: "complaintforoum.appspot.com",
  messagingSenderId: "663871034503",
  appId: "1:663871034503:web:4219b4f5626c31c8919422"
};

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

