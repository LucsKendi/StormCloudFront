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
    { nome: 'Maria Silva', email: 'maria@exemplo.com', equipe: 'Equipe A', supervisor: 'Supervisor A', setor: 'Administração', cpf: '123.456.789-00', foto: null },
    { nome: 'João Oliveira', email: 'joao@exemplo.com', equipe: 'Equipe B', supervisor: 'Supervisor B', setor: 'TI', cpf: '987.654.321-00', foto: null },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isDeleteMode, setIsDeleteMode] = useState(false); // Estado para alternar entre os modos de deletar
  const [selectedToDelete, setSelectedToDelete] = useState<string[]>([]); // Armazena os funcionários selecionados para deletar

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedFuncionario(null); // Limpa o funcionário selecionado
  };

  const handleCadastrarFuncionario = (novoFuncionario: any) => {
    if (selectedFuncionario) {
      // Atualiza o funcionário existente
      setFuncionarios(funcionarios.map(func => (func.nome === selectedFuncionario.nome ? novoFuncionario : func)));
    } else {
      // Adiciona um novo funcionário
      setFuncionarios([...funcionarios, novoFuncionario]);
    }
    handleCloseModal();
  };

  const handleEditFuncionario = (funcionario: any) => {
    setSelectedFuncionario(funcionario); // Define o funcionário selecionado
    setShowModal(true); // Abre o modal
  };

  // Função para lidar com o filtro de pesquisa
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Função para alternar entre os modos de deletar e normal
  const handleDeleteMode = () => {
    if (isDeleteMode) {
      // Se já estiver no modo de deletar, deletar os funcionários selecionados
      setFuncionarios(funcionarios.filter(func => !selectedToDelete.includes(func.nome)));
      setSelectedToDelete([]); // Limpa a seleção após deletar
    }
    setIsDeleteMode(!isDeleteMode); // Alterna o modo de deletar
  };

  // Função para lidar com a seleção de checkboxes
  const handleSelectFuncionario = (nome: string) => {
    if (selectedToDelete.includes(nome)) {
      setSelectedToDelete(selectedToDelete.filter(selected => selected !== nome)); // Remove da lista de seleção
    } else {
      setSelectedToDelete([...selectedToDelete, nome]); // Adiciona à lista de seleção
    }
  };

  // Filtra os funcionários com base no termo de pesquisa
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
            onChange={handleSearchChange} // Atualiza o estado com o valor da pesquisa
          />
        </div>

        <hr className="divider" />

        <table className="table">
          <thead>
            <tr>
              {isDeleteMode && <th></th>} {/* Exibe a coluna de checkbox apenas no modo de deletar */}
              <th>Nome</th>
              <th>Email</th>
              <th>Equipe</th>
              <th>Supervisor</th>
              <th>Setor</th>
              <th>CPF</th>
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
                      checked={selectedToDelete.includes(func.nome)} // Verifica se está selecionado
                      onChange={() => handleSelectFuncionario(func.nome)} // Altera a seleção
                    />
                  </td>
                )}
                <td>{func.nome}</td>
                <td>{func.email}</td>
                <td>{func.equipe}</td>
                <td>{func.supervisor}</td>
                <td>{func.setor}</td>
                <td>{func.cpf}</td>
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
              funcionario={selectedFuncionario} // Passa o funcionário selecionado para edição
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Funcionários;

