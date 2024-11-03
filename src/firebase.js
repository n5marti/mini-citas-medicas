// src/firebase.js

// Importa Firebase y Firestore
import firebase from 'firebase/app';
import 'firebase/firestore';

// Configuración de Firebase - Reemplaza con tus credenciales
const firebaseConfig = {
    apiKey: "AIzaSyA_b8YLQQDeOZLNCOyGrbvi1aiTQbkX5BI",
    authDomain: "app-mini-citas.firebaseapp.com",
    projectId: "app-mini-citas",
    storageBucket: "app-mini-citas.firebasestorage.app",
    messagingSenderId: "1033702557212",
    appId: "1:1033702557212:web:762cab0972cf1ff43a01d9",
    measurementId: "G-3Z49J8XYWQ"
};

// Inicializa Firebase solo si no ha sido inicializado antes
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Exporta la instancia de Firestore
export const db = firebase.firestore();
