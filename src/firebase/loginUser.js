import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, query, collection, getDocs, where } from "firebase/firestore";
import app from "./settings";

const auth = getAuth(app);
const db = getFirestore(app);

export async function getUserName(email) {
    const q = query(collection(db, "usuarios"), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    return querySnapshot;
}

async function loginUser(email, password) {
    return signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user.accessToken;
        const userEmail = userCredential.user.email;
        localStorage.setItem("TokenUser", user);
        localStorage.setItem("Email", userEmail);
        return true;
    }).catch((error) => {
        return false;
    })
}

export default loginUser;