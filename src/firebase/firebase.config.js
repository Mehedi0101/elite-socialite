import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTv7vZ9TDN7am6vKMnDozRn9qxscsYTQs",
  authDomain: "elite-socialite.firebaseapp.com",
  projectId: "elite-socialite",
  storageBucket: "elite-socialite.appspot.com",
  messagingSenderId: "1054989958403",
  appId: "1:1054989958403:web:b556ffcfd7d036c7a9bd36"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
