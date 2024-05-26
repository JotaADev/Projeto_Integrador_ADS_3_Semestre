import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import app from "./settings";

const storage = getStorage(app);

function getBannersMobile() {
    return new Promise((resolve, reject) => {
        let result = [];
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

export default getBannersMobile;