import { getFirestore, query, collection, getDocs, where } from "firebase/firestore";
import app from "./settings";

const db = getFirestore(app);

async function getProducts(camp, operation, value) {
    const q = value
        ? query(collection(db, "produtos"), where(camp, operation, value))
        : query(collection(db, "produtos"));
    const querySnapshot = await getDocs(q);
    return querySnapshot
}

export default getProducts;