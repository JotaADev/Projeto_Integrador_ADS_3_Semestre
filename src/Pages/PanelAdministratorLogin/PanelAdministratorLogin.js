import React from "react";
import "./PanelAdministratorLogin.css";
import { useNavigate } from "react-router-dom";

// =========== Funções importadas ===========
import loginAdmin from '../../firebase/loginAdmin';

const PanelAdministratorLogin = () => {

    const [formValues, setFormValues] = React.useState({email: '', password: ''});
    const navigate = useNavigate();
    const elementError = document.getElementById('error');

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormValues({...formValues, [name]: value,});
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const success = await loginAdmin(formValues.email, formValues.password);
        if (success && localStorage.getItem("TokenAdmin")) {
            navigate('/panel-admin')
            elementError.classList.remove('show-error');
        } else {
            elementError.classList.add('show-error');
        }
    }

    React.useEffect(()=> {
        if (localStorage.getItem("TokenAdmin")) {
            navigate('/panel-admin')
        }
    },[navigate])

    return (
        <>
            <section id='login'>
                <img src='./logo.png'/>
                <form onSubmit={handleSubmit}>
                    <input
                        type='email'
                        name='email'
                        id='email'
                        value={formValues.email}
                        onChange={handleInputChange}
                        placeholder='Digite o e-mail'
                    />
                    <input
                        type='password'
                        name='password'
                        id='password'
                        value={formValues.senha}
                        onChange={handleInputChange}
                        placeholder='Digite a senha'
                    />
                    <button type='submit'>Enviar</button>
                </form>
                <div id='error'>
                    <p id='error'>Login ou senha incorreto.</p>
                </div>
            </section>
        </>
    );
}

export default PanelAdministratorLogin;