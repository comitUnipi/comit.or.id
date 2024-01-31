import { app } from "./firebase_init";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from "firebase/firestore";

const firestore = getFirestore(app);

export async function getData(collectionName) {
  const snapshot = await getDocs(collection(firestore, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
}

export async function getDataById(collectionName, id) {
  const snapshot = await getDoc(doc(firestore, collectionName, id));
  const data = snapshot.data();
  return data;
}

export async function getDataByField(collectionName, field, value) {
  const q = query(
    collection(firestore, collectionName),
    where(field, "==", value)
  );
  const snapshot = await getDocs(q);
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data;
}

// Untuk Menambahkan Data
export async function addData(collectionName, data, callback) {
  await addDoc(collection(firestore, collectionName), data)
    .then(() => {
      callback(true);
    })
    .catch((error) => {
      callback(false);
      console.log(error);
    });
}

// Untuk Mengupdate Data
export async function updateData(collectionName, id, data, callback) {
  const docRef = doc(firestore, collectionName, id);
  await updateDoc(docRef, data)
    .then(() => {
      callback(true);
    })
    .catch(() => {
      callback(false);
    });
}

// Untuk Menghapus Data
export async function deleteData(collectionName, id, callback) {
  const docRef = doc(firestore, collectionName, id);
  await deleteDoc(docRef)
    .then(() => {
      callback(true);
    })
    .catch(() => {
      callback(false);
    });
}
