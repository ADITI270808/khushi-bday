import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyAOelqrhuTNZ7QAaDoRSwf2RBVK9L9DXBk",
  authDomain: "class-71-6dad2.firebaseapp.com",
  projectId: "class-71-6dad2",
  storageBucket: "class-71-6dad2.appspot.com",
  messagingSenderId: "76724897591",
  appId: "1:76724897591:web:2b0cd1f4d8ca62956ffcb2"
};
firebase.initializeApp(firebaseConfig)
export default firebase.firestore()
