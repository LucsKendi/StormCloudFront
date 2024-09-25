import './RedefinirSenha.css';
import './common.css';

const RedefinirSenha = () => {
    return (
        <div className="container"> {/* Adicionando a classe container */}
            <img className='logo' src="public\logo.png" alt="" style={{ marginBottom: '10px' }} />
            <h1 id="titulo">CloudStorm</h1>
            <input
                className="input1"
                type="email"
                placeholder="Insira seu e-mail"
            />
            <div className="div3"></div>
            <input
                className="input1"
                type="password"
                placeholder="Confirme o CNPJ da empresa"
            />
            <div className="div3"></div>
            <button className="botão3">Receber e-mail de definição</button>
        </div>
    );
}

export default RedefinirSenha;
