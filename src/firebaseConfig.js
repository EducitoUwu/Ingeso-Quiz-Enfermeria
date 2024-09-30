import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAtxWNOMZugDHP6oDp22xzrcZaNuWSF1Y0",
  authDomain: "ingesoquizenfermeria.firebaseapp.com",
  projectId: "ingesoquizenfermeria",
  storageBucket: "ingesoquizenfermeria.appspot.com",
  messagingSenderId: "1004424951739",
  appId: "1:1004424951739:web:355f341a58bd7e9e8af69e"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(); // Crea una instancia del proveedor de Google

export { auth, provider, signInWithPopup };
