import React from 'react';
import './ProductModal.css';

// =========== Icones importados ===========
import { IoCloseSharp } from 'react-icons/io5';
import { RiSubtractFill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";

const ProductModal = ({img, productName, oldPrice, price, payment, classStyle, manipToggle}) => {

    let [qtd, setQtd] = React.useState(1);

    return (
        <div id='productmodal' className={classStyle}>
            <div>
                <IoCloseSharp size={'30px'} onClick={manipToggle}/>
            </div>
            <div>
                <img src={img}/>
                <div>
                    <h3>{productName}</h3>
                    <div>
                        <p>De {oldPrice}</p>
                        <p>R$ {price}</p>
                        <p>3x de R$ {payment}</p>
                    </div>
                    <div>
                        <div>
                            <RiSubtractFill onClick={() => {qtd == 1 ? setQtd(qtd) : setQtd(qtd-1)}}/>
                            <input type='text' value={qtd} disabled/>
                            <IoMdAdd onClick={() => {setQtd(qtd+1)}}/>
                        </div>
                        <button>Adicionar ao carrinho</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductModal;