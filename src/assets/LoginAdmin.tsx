import './LoginAdmin.css';
import './common.css';

const LoginAdmin = () => {
    return (
        <div className="container"> {/* Contêiner para centralização */}
            <img className='logo' src="public\logo.png" alt="" />
            <h1 id="titulo">CloudStorm</h1>
            <input
                className="input1"
                type="email"
                placeholder="Por favor, insira seu e-mail"
            />
            <div className="div3"></div>
            <input
                className="input1"
                type="password"
                placeholder="Por favor, insira sua senha"
            />
            <div className="div3"></div>
            <label className="text">
                <input
                    className="input2"
                    type="checkbox"
                /> 
                Lembre-se de mim
                <a className="ref1">Esqueceu sua senha?</a>
            </label>
            <div className="div3"></div>
            <button className="botão1">Entrar</button>
        </div>
    );
};

export default LoginAdmin;
