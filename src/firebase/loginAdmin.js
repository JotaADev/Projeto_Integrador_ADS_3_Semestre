import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "./settings";

const auth = getAuth(app);

function loginAdmin(email, password) {
    return signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user.accessToken;
        localStorage.setItem("TokenAdmin", user)
        return true;
    }).catch((error) => {
        return false;
    })
}

export default loginAdmin;