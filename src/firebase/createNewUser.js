import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import app from "./settings";

const db = getFirestore(app);
const auth = getAuth(app);

export async function createUserAuth(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
        window.alert("Cadastro realizado com sucesso!");
        window.location.reload();
    })
    .catch((error) => {
        throw new Error(error.message);
    });
}

export async function createUser(name, cpf, email, phone, address, state, city, cep) {
    await addDoc(collection(db, "usuarios"), {
        nome_usuario: name,
        cpf: cpf,
        email: email,
        telefone: phone,
        endereço: address,
        estado: state,
        cidade: city,
        cep: cep,
    });
}