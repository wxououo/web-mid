import { getApps, initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  getDocs,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";
import planets from "../json/planets.json";
import { 
  getAuth, signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  initializeAuth,
} from 'firebase/auth';

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
// REFERENCE AUTH
const auth = app_length ? getAuth(app) : initializeAuth(app);

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
export const getUserInfo = async () => {
  const storedUser = localStorage.getItem("user");
  const user = auth?.currentUser || JSON.parse(storedUser) || null;

  if(user) {
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);
    const userDoc = docSnap.data();
    return {
      uid: user.uid,
      email: user.email,
      ...userDoc,
    };    
  } else {
    return {}
  }
}

export const toggleFavoriteProduct = async ({productId, uid}) => {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);
  const userDoc = docSnap.data();
  const favorites = userDoc?.favorites || [];
  if(favorites.length === _.pull(favorites,productId).length){
    favorites.push(productId);  
  }
  await updateDoc(docRef, { favorites }); 
  return favorites;
}

export const login = async ({ email, password }) => {

  await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = auth.currentUser;
  localStorage.setItem("user", JSON.stringify(user));
};

export const register = async ({ name, email, password }) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = userCredential?.user;
  localStorage.setItem("user", JSON.stringify(user));
  const docRef = doc(db, "users", user.uid);
  await setDoc(docRef, {
    name,
  });
};

export const updateUserInfo = async ({ name, adrs, tel, uid }) => {
  const docRef = doc(db, "users", uid);
  await updateDoc(docRef, {
    name,
    adrs,
    tel,
  });
  const user = auth.currentUser;
  localStorage.setItem("user", JSON.stringify(user));
}

export const logout = async () => {
  await auth.signOut();
  localStorage.removeItem("user");
}
