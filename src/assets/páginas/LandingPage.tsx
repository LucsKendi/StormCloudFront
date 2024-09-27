import "./LandingPage.css";
import Header from "./header";

const LandPage = () => {
  return (
    <>
      <Header activePage="LandPage" />

      <div className="container">
        <section className="section1">
          {/*Primeira parte*/}
          <div className="div1">
            <h1 id="titulo">CloudStorm</h1>
            <p id="text">
              O sistema que alinha clima organizacional a alta performance, para
              empresas que buscam excelência.
            </p>

            <button className="botão1">Cadastre sua Empresa</button>
          </div>

          <div className="div2">
            <img className="img1" src="Rectangle 79.png" alt="*" />
          </div>
        </section>

        <section className="section2">
          <div className="div3">
            <img className="img" src="Rectangle 82.png" alt="*" />
          </div>
          <img
            className="vector-wave vector-wave-position"
            src="Vector-wave1.svg"
            alt="*"
          />
          <div className="div4">
            <p id="text2">
              O CloudStorm é uma plataforma web que{" "}
              <span className="destaque">transforma</span> o ambiente
              corporativo, tornando o feedback e as pesquisas de clima super{" "}
              <span className="destaque-line">simples</span> e{" "}
              <span className="destaque-line">descomplicadas</span>.{" "}
            </p>
          </div>
        </section>

        <section className="section3">
          <div className="div5">
            <p id="text3">
              Com uma pegada moderna, ele conecta o RH com toda a empresa,
              criando um fluxo rápido e prático de comunicação.{" "}
            </p>
            <p id="text3">
              A ferramenta permite criar, responder e visualizar perguntas de
              vários jeitos e categorias, deixando todo mundo alinhado de um
              jeito fácil e dinâmico.
            </p>
          </div>

          <div className="div6">
            <img className="img3" src="Rectangle 84.png" alt="*" />
          </div>
        </section>
        <img
          className="vector-wave vector-wave-position2"
          src="Vector-wave1.svg"
          alt="*"
        />
        <section className="section4">
          <div className="div7">
            <img className="img4" src="Rectangle 83.png" alt="*" />
          </div>
        </section>
        <section className="land-page-square-container">
          <div className="land-page-squares">
            <p>Líderes</p>
          </div>
          <div className="land-page-squares">
            <p>Agentes</p>
          </div>
          <div className="land-page-squares">
            <p>Equipes</p>
          </div>
        </section>
        <div className="vector-wave-end-container">
          <img
            className="vector-wave vector-wave-position3"
            src="Vector-wave2.svg"
            alt="*"
          />
        </div>
      </div>
    </>
  );
};

export default LandPage;
