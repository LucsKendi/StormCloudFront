import './UserSignin.css';
import './common.css';

const SignIn = () => {
    return (
        <div className='container'>
            <div className='div1'>
                <img className='logo' src="public/logo.png" alt="Logo" />
                <h1 id='titulo'>CloudStorm</h1>
                <div className='text-right'>
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
                    <div className="d-flex align-items-center justify-content-between mt-2">
                        <label className='text'>
                            <input
                                className='input2'
                                type="checkbox"
                            /> Lembre-se de mim
                        </label>
                        <a className='ref1'>Esqueceu sua senha?</a>
                    </div>
                    <button className='botão1 mt-3'>Entrar</button>
                </div>
            </div>
            <div className='div2'>
                <img className='liimg' src="public/Rectangle 28.png" alt="" />
            </div>
        </div>
    )
}

export default SignIn;
