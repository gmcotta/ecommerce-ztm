import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyBBAyQcImHMbo1U_5KTdOvOJXJwKVz5TsQ",
  authDomain: "ecommerce-ztm.firebaseapp.com",
  databaseURL: "https://ecommerce-ztm.firebaseio.com",
  projectId: "ecommerce-ztm",
  storageBucket: "ecommerce-ztm.appspot.com",
  messagingSenderId: "104131391452",
  appId: "1:104131391452:web:2b9c73418e2b9242f72919",
  measurementId: "G-BR1HS9K8X7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;