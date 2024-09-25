import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './funcionarios.css';
import Header from '../componentes/header';
import CadastroFuncionario from '../componentes/CadastroFuncionario';

const Funcionários: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [funcionarios, setFuncionarios] = useState([
    { nome: 'Maria Silva', email: 'maria@exemplo.com', equipe: 'Equipe A', supervisor: 'Supervisor A', setor: 'Administração', foto: null },
  ]);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCadastrarFuncionario = (novoFuncionario: any) => {
    setFuncionarios([...funcionarios, novoFuncionario]);
    handleCloseModal();
  };

  return (
    <div className="funcionarios-page">
      <div className="sidebar">
        <button className="navbar-toggle">&#9776;</button>
      </div>

      <div className="content">
        <Header activePage="funcionarios" />

        <div className="header">
          <div className="action-buttons">
            <button className="btn btn-custom" onClick={handleOpenModal}>Cadastrar</button>
            <button className="btn btn-custom">Editar</button>
            <button className="btn btn-custom">Deletar</button>
          </div>
          <input type="text" className="form-control search-bar" placeholder="Buscar..." />
        </div>

        <hr className="divider" />

        <table className="table">
          <thead>
            <tr>
              <th></th> 
              <th>Nome</th>
              <th>Email</th>
              <th>Equipe</th>
              <th>Supervisor</th>
              <th>Setor</th>
            </tr>
          </thead>
          <tbody>
            {funcionarios.map((func, index) => (
              <tr key={index}>
                <td><img src={func.foto || ''} alt="Foto" style={{ width: '30px', height: '30px' }} /></td>
                <td>{func.nome}</td>
                <td>{func.email}</td>
                <td>{func.equipe}</td>
                <td>{func.supervisor}</td>
                <td>{func.setor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-modal" onClick={handleCloseModal}>X</button>
            <CadastroFuncionario onCadastrar={handleCadastrarFuncionario} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Funcionários;
