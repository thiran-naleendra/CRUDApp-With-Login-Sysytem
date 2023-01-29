import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBCFWXHNdyJ6QT1LW5lYe3dxkJQB6QLb3M",
  authDomain: "react-crud-a10ee.firebaseapp.com",
  projectId: "react-crud-a10ee",
  storageBucket: "react-crud-a10ee.appspot.com",
  messagingSenderId: "838795721600",
  appId: "1:838795721600:web:2723eb31f37a55bdf85f65"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
