import { initializeApp, firestore } from 'firebase'

var FirebaseConfig = {
    apiKey: "AIzaSyDCjRynXC2ZVa6NcpNfzaMJBq19n_2tOuk",
    authDomain: "qr-code-ordering-system.firebaseapp.com",
    databaseURL: "https://qr-code-ordering-system.firebaseio.com",
    projectId: "qr-code-ordering-system",
    storageBucket: "qr-code-ordering-system.appspot.com",
    messagingSenderId: "1067427070348",
    appId: "1:1067427070348:web:5eb22dab4d460c377756a9",
    measurementId: "G-4PTW2E9CF7"
};
initializeApp(FirebaseConfig)

const db = firestore();

export const koiSushiMenu = db.collection("koisushiMenu");
export const koiSushiRestaurant = db.collection("restaurants").doc("koisushi")


