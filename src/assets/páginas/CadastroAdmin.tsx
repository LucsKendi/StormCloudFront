import './CadastroAdmin.css';
import './common.css';

const CadastroAdmin = () => {
    return (
        <div className="container">
            <img src="src\assets\logo.png" alt="" className='logo'/>
            <h1 id="titulo">CloudStorm</h1>

            <div className="input-group">
                <input
                    className="input1"
                    type="text"
                    placeholder="Nome"
                />
                <input
                    className="input1"
                    type="text"
                    placeholder="Empresa"
                />
            </div>

            <div className="input-group">
                <input
                    className="input1"
                    type="text"
                    placeholder="Seu e-mail"
                />
                <input
                    className="input1"
                    type="email"
                    placeholder="CNPJ"
                />
            </div>

            <div className="input-group">
                <input
                    className="input1"
                    type="password"
                    placeholder="Sua senha"
                />
                <input
                    className="input1"
                    type="password"
                    placeholder="Confirmar senha"
                />
            </div>

            <label className="text">
                <input
                    className="input2"
                    type="checkbox"
                />
                Lembre-se de mim
            </label>

            <button className="botão1">Entrar</button>
        </div>
    );
}

export default CadastroAdmin;
