import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "./settings";

const auth = getAuth(app);

function loginUser(email, password) {
    return signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user.accessToken;
        localStorage.setItem("TokenUser", user)
        return true;
    }).catch((error) => {
        return false;
    })
}

export default loginUser;