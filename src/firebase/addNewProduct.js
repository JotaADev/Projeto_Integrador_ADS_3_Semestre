import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import app from "./settings";

const db = getFirestore(app);
const storage = getStorage(app);

async function addNewProduct(name, price, oldPrice, category, stock, imgUrl) {
    await addDoc(collection(db, "produtos"), {
        nome_produto: name,
        preco_atual: price,
        preco_anterior: oldPrice,
        categoria: category,
        estoque: stock,
        imagem_produto: imgUrl,
    });
}

async function handleFileUpload(file, name, price, oldPrice, category, stock) {
    if (!file) {
        throw new Error('Por favor, selecione um arquivo primeiro.');
    }

    try {
        const storageRef = ref(storage, `imagens-produtos/${file.name}`);
        await uploadBytes(storageRef, file);
        const url = await getDownloadURL(storageRef);
        const convertedPrice = Number(price.replace(',', '.'));
        const convertedOldPrice = Number(oldPrice.replace(',', '.'));
        await addNewProduct(name, convertedPrice, convertedOldPrice, category, stock, url);
    } catch (err) {
        throw new Error(err.message);
    }
}

export default handleFileUpload;