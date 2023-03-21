// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD8jy62eFXoi5j7d5ZOG8E0jt0IKy-LSS4",
    authDomain: "fir-auth-4a583.firebaseapp.com",
    projectId: "fir-auth-4a583",
    storageBucket: "fir-auth-4a583.appspot.com",
    messagingSenderId: "912442864672",
    appId: "1:912442864672:web:495303f404489eef20b845"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const auth = firebase.auth()

export { auth };
