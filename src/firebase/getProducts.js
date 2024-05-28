import { getFirestore, query, collection, getDocs, where } from "firebase/firestore";
import app from "./settings";

const db = getFirestore(app);

async function getProducts(category) {
    const q = category
        ? query(collection(db, "produtos"), where("categoria", "==", category))
        : query(collection(db, "produtos"));
    const querySnapshot = await getDocs(q);
    return querySnapshot
}

export default getProducts;