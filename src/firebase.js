import firebase from "./firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBJhHeRWRSFB0A1_NyF4cJggrBcyMC6fto",
  authDomain: "linkedin-clone-9348d.firebaseapp.com",
  projectId: "linkedin-clone-9348d",
  storageBucket: "linkedin-clone-9348d.appspot.com",
  messagingSenderId: "25232358853",
  appId: "1:25232358853:web:828359c4cabe45e74e5fac",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
