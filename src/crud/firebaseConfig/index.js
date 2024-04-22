import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

function StartFirebase() {
    const firebaseConfig = {
      apiKey: "AIzaSyA--BTXgPuCZdfCYwpgXd-Sk5D52P9vGAY",
      authDomain: "pi-3-1e17b.firebaseapp.com",
      projectId: "pi-3-1e17b",
      storageBucket: "pi-3-1e17b.appspot.com",
      messagingSenderId: "585811412378",
      appId: "1:585811412378:web:1e96f80a4f57a34913a623",
      measurementId: "G-MPQKLYHDWT"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
}

export default StartFirebase