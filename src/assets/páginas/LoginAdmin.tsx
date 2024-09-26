import './LoginAdmin.css';
import './common.css';

const LoginAdmin = () => {
    return (
        <div className="container"> {/* Contêiner para centralização */}

            <img src="src\assets\logo.png" alt="" className='logo'/>

            <h1 id="titulo">CloudStorm</h1>

            <input
                className="input1"
                type="email"
                placeholder="Por favor, insira seu e-mail"
            />
            
            <input
                className="input1"
                type="password"
                placeholder="Por favor, insira sua senha"
            />
            
            <label className="text">
                <input
                    className="input2"
                    type="checkbox"
                /> 
                Lembre-se de mim
                <a className="ref1">Esqueceu sua senha?</a>
            </label>
            
            <button className="botão1">Entrar</button>
        </div>
    );
};

export default LoginAdmin;
