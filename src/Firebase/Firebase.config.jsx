// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvYXcpW6r2r6hisdyBtsTdvudMvtBVD-M",
  authDomain: "bd-car-client.firebaseapp.com",
  projectId: "bd-car-client",
  storageBucket: "bd-car-client.appspot.com",
  messagingSenderId: "481899455078",
  appId: "1:481899455078:web:bf29872ca28719f2c583a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app