import React, { useState } from 'react';
import './AuthModal.css';
import { createUser, createUserAuth } from '../../firebase/createNewUser';
import loginUser from '../../firebase/loginUser';
import { useNavigate } from 'react-router-dom';

const AuthModal = ({authToggle}) => {

    const [isLogin, setIsLogin] = useState(true);
    const toggleForm = () => setIsLogin(!isLogin);

    const [name, setName] = React.useState('');
    const [cpf, setCpf] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [state, setState] = React.useState('');
    const [city, setCity] = React.useState('');
    const [cep, setCep] = React.useState('');
    const [password, setPassword] = React.useState('');

    const addNewUser = async (e) => {
        e.preventDefault();
        try {
            await createUser(name, cpf, email, phone, address, state, city, cep);
            await createUserAuth(email, password);
            setName('');
            setCpf('');
            setEmail('');
            setPhone('');
            setAddress('');
            setState('');
            setCity('');
            setCep('');
            setPassword('');
        } catch (err) {
            window.alert(err);
        }
    }

    const [formValues, setFormValues] = React.useState({email: '', password: ''});
    const navigate = useNavigate();
    const elementError = document.getElementById('errorloginuser');

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormValues({...formValues, [name]: value,});
    }

    const accessUser = async (event) => {
        event.preventDefault();
        const success = await loginUser(formValues.email, formValues.password);
        if (success && localStorage.getItem("TokenUser")) {
            navigate('/area-do-usuario')
            elementError.classList.remove('showerrorloginuser');
        } else {
            elementError.classList.add('showerrorloginuser');
        }
    }

    return (
        <div id='authmodal' className={authToggle}>
            {isLogin ? (
                <div>
                    <h2>Login</h2>
                    <form onSubmit={accessUser}>
                        <input
                            type="email"
                            required
                            placeholder='Email'
                            id='email'
                            name='email'
                            value={formValues.email}
                            onChange={handleInputChange}
                        />
                        <input
                            type="password"
                            required
                            placeholder='Senha'
                            id='password'
                            name='password'
                            value={formValues.password}
                            onChange={handleInputChange}
                        />
                        <button type="submit">Entrar</button>
                    </form>
                    <p>Não tem conta? <a onClick={toggleForm}>Clique aqui</a></p>
                    <div id='errorloginuser'>
                        <p>Login ou senha incorreto.</p>
                    </div>
                </div>
                ) : (
                <div>
                    <h2>Cadastro</h2>
                    <form onSubmit={addNewUser}>
                        <input type="text" required placeholder='Nome completo' value={name} onChange={(e) => setName(e.target.value)}/>
                        <input type="text" required placeholder='CPF'value={cpf} onChange={(e) => setCpf(e.target.value)}/>
                        <input type="email" required placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <input type="text" required placeholder='Número de celular' value={phone} onChange={(e) => setPhone(e.target.value)}/>
                        <input type="text" required placeholder='Endereço completo' value={address} onChange={(e) => setAddress(e.target.value)}/>
                        <input type="text" required placeholder='Estado' value={state} onChange={(e) => setState(e.target.value)}/>
                        <input type="text" required placeholder='Cidade' value={city} onChange={(e) => setCity(e.target.value)}/>
                        <input type="text" required placeholder='CEP' value={cep} onChange={(e) => setCep(e.target.value)}/>
                        <input type='password' required placeholder='Defina uma senha de acesso' value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <button type="submit">Cadastrar</button>
                    </form>
                    <p>Já tem conta? <a onClick={toggleForm}>Clique aqui</a></p>
                </div>
            )}
        </div>
    );
};

export default AuthModal;