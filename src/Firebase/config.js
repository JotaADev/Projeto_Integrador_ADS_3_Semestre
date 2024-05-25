import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, query, getDocs } from "firebase/firestore";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAsjcJYrBlQ0DedcKcjAbewkIKduPWjBps",
  authDomain: "viadeflores.firebaseapp.com",
  projectId: "viadeflores",
  storageBucket: "viadeflores.appspot.com",
  messagingSenderId: "771604585027",
  appId: "1:771604585027:web:d95d1d9c9ecde21b3652f6"
};

initializeApp(firebaseConfig);

//Recuperando Banners:
export function getBanners() {
    return new Promise((resolve, reject) => {
        let result = [];
        const storage = getStorage();
        const listRef = ref(storage, 'banners');

        listAll(listRef).then((res) => {
            let promises = res.items.map((itemRef) => {
                return getDownloadURL(ref(storage, itemRef.fullPath)).then((url) => {
                    result.push(url);
                });
            });

            Promise.all(promises).then(() => {
                resolve(result);
            }).catch((error) => {
                reject(error);
            });
        }).catch((error) => {
            reject(error);
        });
    });
}

//Recuperando Banners Mobile:
export function getBannersMobile() {
    return new Promise((resolve, reject) => {
        let result = [];
        const storage = getStorage();
        const listRef = ref(storage, 'banners-mobile');

        listAll(listRef).then((res) => {
            let promises = res.items.map((itemRef) => {
                return getDownloadURL(ref(storage, itemRef.fullPath)).then((url) => {
                    result.push(url);
                });
            });

            Promise.all(promises).then(() => {
                resolve(result);
            }).catch((error) => {
                reject(error);
            });
        }).catch((error) => {
            reject(error);
        });
    });
}

// Obtendo dados dos produtos
const db = getFirestore();
const q = query(collection(db, "produtos"));
export const querySnapshot = await getDocs(q);

// Login do Firebase Administrador
const auth = getAuth();

export function signupAdmin(email, password) {
    return signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user.accessToken;
        localStorage.setItem("TokenAdmin", user)
        return true;
    }).catch((error) => {
        return false;
    })
}