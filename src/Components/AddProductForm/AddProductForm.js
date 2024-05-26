import React from "react";
import './AddProductForm.css';

// =========== Funções importadas ===========
import handleFileUpload from "../../firebase/addNewProduct";

const AddProductForm = () => {

    const [file, setFile] = React.useState(null);
    const [url, setUrl] = React.useState(null);
    const [error, setError] = React.useState(null);

    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [oldPrice, setOldPrice] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [stock, setStock] = React.useState('');

    const handleChange = (e) => {
        let selected = e.target.files[0];
        setFile(selected);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const uploadedUrl = await handleFileUpload(file, name, price, oldPrice, category, stock);
            setUrl(uploadedUrl);
            setFile(null);
            setName('');
            setPrice('');
            setOldPrice('');
            setCategory('');
            setStock('');
            setError(null);
        } catch (err) {
            setError(err.message);
        }
    }

    return (
        <form onSubmit={handleSubmit} id="addproduct">
            <h1>Adicionar Produto</h1>
            <input type="text" placeholder="Nome do Produto" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="number" placeholder="Preço Atual" value={price} onChange={(e) => setPrice(e.target.value)} />
            <input type="number" placeholder="Preço Anterior" value={oldPrice} onChange={(e) => setOldPrice(e.target.value)} />
            <select id='categoria' value={category} onChange={(e) => setCategory(e.target.value)}>
                <option defaultValue=''>Selecione uma categoria</option>
                <option value='presente'>Presentes</option>
                <option value='cesta'>Cestas</option>
                <option value='buque'>Buquês</option>
                <option value='arranjo'>Arranjos</option>
            </select>
            <input type="number" placeholder="Estoque" value={stock} onChange={(e) => setStock(e.target.value)} />
            <div>
                <label htmlFor="file">Escolha a imagem do produto</label>
                <input type="file" id="file" onChange={handleChange}/>
            </div>
            {error && <div>{error}</div>}
            <button type="submit">Cadastrar</button>
            {url && <div>Produto incluído com sucesso!</div>}
        </form>
    );
}

export default AddProductForm;