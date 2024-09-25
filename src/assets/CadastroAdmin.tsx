import './CadastroAdmin.css';
import './common.css';

const CadastroAdmin = () => {
    return (
        <div>
            <img className='logo' src="public\logo.png" alt="" />
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
                    placeholder="Nome da Empresa"
                />
            </div>

            <div className="div3"></div>

            <div className="input-group">
                <input
                    className="input1"
                    type="text"
                    placeholder="CNPJ"
                />
                <input
                    className="input1"
                    type="email"
                    placeholder="Seu e-mail"
                />
            </div>

            <div className="div3"></div>

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

            <div className="div3"></div>

            <label className="text">
                <input
                    className="input2"
                    type="checkbox"
                />
                Lembre-se de mim
            </label>

            <div className="div3"></div>

            <button className="botão1">Entrar</button>
        </div>
    );
}

export default CadastroAdmin;
