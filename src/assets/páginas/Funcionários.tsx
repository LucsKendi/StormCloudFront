import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './funcionarios.css';
import Header from '../componentes/header';
import Sidebar from '../componentes/sidebar';
import CadastroFuncionario from '../componentes/CadastroFuncionario';

const Funcionários: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedFuncionario, setSelectedFuncionario] = useState<any | null>(null);
  const [funcionarios, setFuncionarios] = useState<any[]>([
    { nome: 'Maria Silva', email: 'maria@exemplo.com', equipe: 'Equipe A', supervisor: 'Supervisor A', setor: 'Administração', foto: null },
    { nome: 'João Oliveira', email: 'joao@exemplo.com', equipe: 'Equipe B', supervisor: 'Supervisor B', setor: 'TI', foto: null },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [selectedToDelete, setSelectedToDelete] = useState<string[]>([]);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedFuncionario(null);
  };

  const handleCadastrarFuncionario = (novoFuncionario: any) => {
    if (selectedFuncionario) {
      setFuncionarios(funcionarios.map(func => (func.nome === selectedFuncionario.nome ? novoFuncionario : func)));
    } else {
      setFuncionarios([...funcionarios, novoFuncionario]);
    }
    handleCloseModal();
  };

  const handleEditFuncionario = (funcionario: any) => {
    setSelectedFuncionario(funcionario);
    setShowModal(true);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleDeleteMode = () => {
    if (isDeleteMode) {
      setFuncionarios(funcionarios.filter(func => !selectedToDelete.includes(func.nome)));
      setSelectedToDelete([]);
    }
    setIsDeleteMode(!isDeleteMode);
  };

  const handleSelectFuncionario = (nome: string) => {
    if (selectedToDelete.includes(nome)) {
      setSelectedToDelete(selectedToDelete.filter(selected => selected !== nome));
    } else {
      setSelectedToDelete([...selectedToDelete, nome]);
    }
  };

  const filteredFuncionarios = funcionarios.filter(func =>
    func.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    func.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    func.equipe.toLowerCase().includes(searchTerm.toLowerCase()) ||
    func.supervisor.toLowerCase().includes(searchTerm.toLowerCase()) ||
    func.setor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="funcionarios-page">
      <Sidebar />

      <div className="content">
        <Header activePage="funcionarios" />

        <div className="header">
          <div className="action-buttons">
            <button className="btn btn-custom" onClick={handleOpenModal}>Cadastrar</button>
            <button className="btn btn-custom" onClick={handleDeleteMode}>
              {isDeleteMode ? 'Deletar Usuários' : 'Deletar'}
            </button>
          </div>
          <input
            type="text"
            className="form-control search-bar"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>

        <hr className="divider" />

        <table className="table">
        <thead>
  <tr>
    {isDeleteMode && <th></th>}
    <th className="foto-coluna">Foto</th> {/* Aqui adicionamos a classe foto-coluna */}
    <th>Nome</th>
    <th>Email</th>
    <th>Equipe</th>
    <th>Supervisor</th>
    <th>Setor</th>
    <th>Ações</th>
  </tr>
      </thead>
      <tbody>
        {filteredFuncionarios.map((func, index) => (
          <tr key={index}>
            {isDeleteMode && (
              <td>
                <input
                  type="checkbox"
                  checked={selectedToDelete.includes(func.nome)}
                  onChange={() => handleSelectFuncionario(func.nome)}
                />
              </td>
            )}
            <td className="foto-coluna">
              {func.foto ? (
                <img src={func.foto} alt={func.nome} style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
              ) : (
                <div className="foto-placeholder" style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: '#ccc' }}></div>
              )}
            </td>
            <td>{func.nome}</td>
            <td>{func.email}</td>
            <td>{func.equipe}</td>
            <td>{func.supervisor}</td>
            <td>{func.setor}</td>
            <td>
              <button className="btn btn-custom" onClick={() => handleEditFuncionario(func)} disabled={isDeleteMode}>
                Editar
              </button>
            </td>
          </tr>
        ))}
      </tbody>

        </table>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-modal" onClick={handleCloseModal}>X</button>
            <CadastroFuncionario
              onCadastrar={handleCadastrarFuncionario}
              funcionario={selectedFuncionario}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Funcionários;

