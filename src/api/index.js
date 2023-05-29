import { getApps, initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";
import planets from "../json/planets.json";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APPID
};

const app_length = getApps().length > 0;

// Initialize Firebase
const app = app_length ? getApps() : initializeApp(firebaseConfig);

// REFERENCE DB
const db = getFirestore(app);

// REFERENCE COLLECTION
const imagesCollection = collection(db, "products");

export const feedImages = async () => {
  // DELETE ALL EXISTING DOCS
  const querySnapshot = await getDocs(imagesCollection);
  querySnapshot.forEach(async (planets) => {
    await deleteDoc(doc(db, "image", planets.id));
  });
  // ADD NEW DOCS
  planets.forEach(async (image) => {
    const docRef = await doc(imagesCollection);
    await setDoc(docRef, { ...image, id: docRef.id });
  });
};

export const getImages = async () => {
  const querySnapshot = await getDocs(imagesCollection);
  // Convert query to a json array.
  let result = [];
  querySnapshot.forEach(async (image) => {
    await result.push(image.data());
  });
  console.log({ result });
  return result
};
//NEW
export const getProductById = async ({ queryKey }) => {
  const [id] = queryKey;
  const docRef = await doc(db, "products", id);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};

export const getProductsByCategory = async ({ queryKey }) => {
  const [category] = queryKey;
  const q = await query(
    productsCollection,
    where("category", "==", category.toUpperCase())
  );
  let querySnapshot = await getDocs(q);
  // Convert the query to a json array.
  let result = [];
  querySnapshot.forEach(async (product) => {
    await result.push(product.data());
  });
  return result;
};
export const signInWithEmailPassword = async ({ email, password }) => {
};

export const registerWithEmailPassword = async ({ email, password, username }) => {
};
