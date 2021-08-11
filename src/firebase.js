import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAj1hLUMaVK3ogJBfvOXwnp8DZ000oxQfk",
  authDomain: "netflix-clone-841f2.firebaseapp.com",
  projectId: "netflix-clone-841f2",
  storageBucket: "netflix-clone-841f2.appspot.com",
  messagingSenderId: "861678659660",
  appId: "1:861678659660:web:2e942d7f1147598ed96ce9",
  measurementId: "G-3NH7XP8Z9D"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { auth };
export default db;