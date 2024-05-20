import { initializeApp } from "firebase/app";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

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