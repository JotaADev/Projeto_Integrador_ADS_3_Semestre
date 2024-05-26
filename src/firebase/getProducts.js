import { getFirestore, query, collection, getDocs } from "firebase/firestore";
import app from "./settings";

const db = getFirestore(app);

async function getProducts() {
    const q = query(collection(db, "produtos"));
    const querySnapshot = await getDocs(q);
    return querySnapshot
}

export default getProducts;