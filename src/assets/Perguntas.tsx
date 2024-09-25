import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar o CSS do Bootstrap
import './perguntas.css';

const Perguntas: React.FC = () => {
  return (
    <div className="perguntas-page">
      {/* Sidebar */}
      <div className="sidebar">
        <button className="navbar-toggle">&#9776;</button>
      </div>

      <div className="content">
        {/* Navbar */}
        <div className="navbar">
          <ul className="navbar-list">
            <li>Perguntas</li>
          </ul>
        </div>

        {/* Header com botão de cadastrar pergunta */}
        <div className="header">
          <button className="btn btn-custom">Cadastrar nova pergunta</button>
        </div>

        <hr className="divider" />

        {/* Tabela */}
        <table className="table">
          <thead>
            <tr>
              <th>Equipe</th>
              <th>Data</th>
              <th>Pergunta</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Equipe A</td>
              <td>01/01/2024</td>
              <td>Qual é a sua estratégia?</td>
              <td><span className="badge bg-success">Respondido</span></td>
            </tr>
            <tr>
              <td>Equipe B</td>
              <td>02/01/2024</td>
              <td>Quais são os próximos passos?</td>
              <td><span className="badge bg-warning">Aguardando Resposta</span></td>
            </tr>
            <tr>
              <td>Equipe C</td>
              <td>03/01/2024</td>
              <td>Como você avalia o desempenho?</td>
              <td><span className="badge bg-success">Respondido</span></td>
            </tr>
          </tbody>
        </table>

        {/* Paginação */}
        <nav aria-label="Page navigation">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <button className="page-link text-green" aria-label="Previous">
                <span aria-hidden="true" className="font-weight-bold">&laquo;</span>
              </button>
            </li>
            {[...Array(6)].map((_, index) => (
              <li className="page-item" key={index}>
                <span className="page-link">{index + 1}</span>
              </li>
            ))}
            <li className="page-item">
              <button className="page-link text-green" aria-label="Next">
                <span aria-hidden="true" className="font-weight-bold">&raquo;</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Perguntas;
