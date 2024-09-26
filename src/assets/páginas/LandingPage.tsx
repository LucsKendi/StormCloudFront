import './LandingPage.css';
import Header from './header';

const LandPage = () => {
    return(
        <>
        <Header activePage='LandPage'/>
        
        <div className='container'>
            <section className='section1'>{/*Primeira parte*/}
                <div className='div1'>
                    <h1 id='titulo'>CloudStorm</h1>
                    <p id='text'>O sistema que alinha clima organizacional a alta performance, para empresas que buscam excelência.</p>
                
                    <button className='botão1'>Cadastre sua Empresa</button>
                </div>

                <div className='div2'>
                    <img className='img1' src="src/assets/Rectangle 79.png" alt="*" />
                </div>
            </section>

            <section className='section2'>
                <div className='div3'>
                    <img className='img' src="src/assets/Rectangle 82.png" alt="*" />
                </div>

                <div className='div4'>
                    <p id='text2'>O CloudStorm é uma plataforma web que <span className='destaque'>transforma</span> o ambiente corporativo, tornando o feedback e as pesquisas de clima super <span className='destaque-line'>simples</span> e <span className='destaque-line'>descomplicadas</span>. </p>
                
                </div>
            </section>

            <section className='section3'>
                <div className='div5'>
                    <p id='text3'>Com uma pegada moderna, ele conecta o RH com toda a empresa, criando um fluxo rápido e prático de comunicação. </p>
                    <p id='text3'>A ferramenta permite criar, responder e visualizar perguntas de vários jeitos e categorias, deixando todo mundo alinhado de um jeito fácil e dinâmico.</p>
                </div>

                <div className='div6'>
                    <img className='img3' src="src/assets/Rectangle 84.png" alt="*" />
                </div>
            </section>

            <section className='section4'>
                <div className='div7'>
                    <img className='img4' src="src/assets/Rectangle 83.png" alt="*" />
                </div>

            </section>

            <img className='fundo' src="src/assets/Vector 2.png" alt="" />
        </div>
        </>
    )
}

export default LandPage;