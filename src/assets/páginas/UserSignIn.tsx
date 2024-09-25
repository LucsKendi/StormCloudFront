import './UserSignin.css';
import './common.css';

const SignIn = () => {
    return (
        <div className='container'>
            <div className='div1'>
                <img className='logo' src="src\assets\logo.png" alt=""/>
                <h1 id='titulo'>CloudStorm</h1>
               
                <input
                    className="input1"
                    type="email"
                    placeholder="Insira E-mail"
                />

                <input
                    className="input1"
                    type="password"
                    placeholder="Insira senha"
                />

                <div className="checkbox-container">
                    <label id='text'>
                        <input
                            className='input2'
                            type="checkbox"
                        /> Lembre-se de mim
                    </label>
                    <a className='ref1' href="#">Esqueceu sua senha?</a>
                </div>

                <button className='botão1'>Entrar</button>
            </div>

            <div className='div2'>
                <img className='liimg' src="src/assets/Rectangle 28.png" alt="Imagem adicional" />
            </div>
        </div>
    )
}

export default SignIn;