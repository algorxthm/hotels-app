// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADtUIEnOmzAP4o_IiI7LhO_VRY3RfGBwY",
  authDomain: "hotelapp-666.firebaseapp.com",
  databaseURL: "https://hotelapp-666-default-rtdb.firebaseio.com",
  projectId: "hotelapp-666",
  storageBucket: "hotelapp-666.appspot.com",
  messagingSenderId: "923532149673",
  appId: "1:923532149673:web:375e7bbe76fca2eec3bab8",
  measurementId: "G-329VPKK481"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = firebase.firestore(app)
export const auth = firebase.auth()
export { firebase }