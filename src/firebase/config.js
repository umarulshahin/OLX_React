import firebase from 'firebase';
import 'firebase/auth' 
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyD2ptRl4Zn1v_guJYJxbOyeGmn4C8haBOc",
  authDomain: "olxclone-39bf9.firebaseapp.com",
  projectId: "olxclone-39bf9",
  storageBucket: "olxclone-39bf9.appspot.com",
  messagingSenderId: "1091228780058",
  appId: "1:1091228780058:web:fd99cef7bdb64af86a33a3",
  // measurementId: "G-EEVDCNVXFW"
};

export default firebase.initializeApp(firebaseConfig)

