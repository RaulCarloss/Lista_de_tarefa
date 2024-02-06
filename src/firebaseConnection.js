import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBltOIMebOaG_k4ZU3ux85dJj8YdxpzKeY",
    authDomain: "curso-4e517.firebaseapp.com",
    projectId: "curso-4e517",
    storageBucket: "curso-4e517.appspot.com",
    messagingSenderId: "453714834652",
    appId: "1:453714834652:web:0cd62c6e184fa85cbeb019",
    measurementId: "G-C4YNJD2T45"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);

  export { db, auth };