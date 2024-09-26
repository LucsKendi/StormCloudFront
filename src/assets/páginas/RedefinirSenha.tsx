import './RedefinirSenha.css';
import './common.css';

const RedefinirSenha = () => {
    return (
        <div className="container"> {/* Adicionando a classe container */}
            <img src="src\assets\logo.png" alt="" className='logo'/>
            <h1 id="titulo">CloudStorm</h1>
            <input
                className="input1"
                type="email"
                placeholder="Insira seu e-mail"
            />
            
            <input
                className="input1"
                type="password"
                placeholder="Confirme o CNPJ da empresa"
            />
        
            <button className="botão3">Receber e-mail de Redefinição</button>
        </div>
    );
}

export default RedefinirSenha;
