import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Equipes.css';
import Header from '../componentes/header';
import Sidebar from '../componentes/sidebar';
import CadastroEquipes from '../componentes/CadastroEquipe';
import EditarEquipe from '../componentes/EditarEquipe'; // Importar o componente de edição

const Equipes: React.FC = () => {
  const [mostrarCadastro, setMostrarCadastro] = useState(false);
  const [equipes, setEquipes] = useState<any[]>([
    { nome: 'Equipe A', setor: 'Administração', supervisores: ['Supervisor A'], funcionarios: ['Funcionario 1', 'Funcionario 2'] },
    { nome: 'Equipe B', setor: 'TI', supervisores: ['Supervisor B'], funcionarios: ['Funcionario 3'] },
  ]);
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [selectedToDelete, setSelectedToDelete] = useState<string[]>([]);
  const [equipeParaEditar, setEquipeParaEditar] = useState<any | null>(null); // Armazena a equipe a ser editada
  const [mostrarEdicao, setMostrarEdicao] = useState(false); // Controle de exibição do modal de edição

  const handleCadastrarEquipe = (novaEquipe: any) => {
    setEquipes([...equipes, novaEquipe]);
    setMostrarCadastro(false);
  };

  const handleEditarEquipe = (equipeAtualizada: any) => {
    setEquipes(
      equipes.map((equipe) =>
        equipe.nome === equipeAtualizada.nome ? equipeAtualizada : equipe
      )
    );
    setMostrarEdicao(false);
  };

  const handleDeleteMode = () => {
    if (isDeleteMode) {
      setEquipes(equipes.filter(equipe => !selectedToDelete.includes(equipe.nome)));
      setSelectedToDelete([]);
    }
    setIsDeleteMode(!isDeleteMode);
  };

  const handleSelectEquipe = (nome: string) => {
    if (selectedToDelete.includes(nome)) {
      setSelectedToDelete(selectedToDelete.filter(selected => selected !== nome));
    } else {
      setSelectedToDelete([...selectedToDelete, nome]);
    }
  };

  const handleAbrirEditar = (equipe: any) => {
    setEquipeParaEditar(equipe);
    setMostrarEdicao(true);
  };

  return (
    <div className="equipes-page d-flex">
      <Sidebar />
      <div className="content flex-grow-1 p-4">
        <Header activePage="equipes" />

        <div className="d-flex my-3">
          <button className="btn btn-verde-claro mx-2" onClick={() => setMostrarCadastro(true)}>Cadastrar</button>
          <button className="btn btn-verde-claro mx-2" onClick={handleDeleteMode}>
            {isDeleteMode ? 'Deletar Equipes' : 'Deletar'}
          </button>
        </div>

        <hr className="divider" />

        <table className="table table-hover table-sm rounded overflow-hidden zebra-table">
          <thead className="bg-light text-secondary">
            <tr>
              {isDeleteMode && <th></th>}
              <th>Nome da Equipe</th>
              <th>Setor</th>
              <th>Supervisores</th>
              <th>N° de Integrantes</th>
              <th>Ações</th> {/* Nova coluna de Ações */}
            </tr>
          </thead>
          <tbody>
            {equipes.map((equipe, index) => (
              <tr key={index}>
                {isDeleteMode && (
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedToDelete.includes(equipe.nome)}
                      onChange={() => handleSelectEquipe(equipe.nome)}
                    />
                  </td>
                )}
                <td>{equipe.nome}</td>
                <td>{equipe.setor}</td>
                <td>{equipe.supervisores.join(', ')}</td>
                <td>{equipe.supervisores.length + equipe.funcionarios.length}</td>
                <td>
                  <button className="btn btn-custom" onClick={() => handleAbrirEditar(equipe)}>
                    Editar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <hr className="divider" />

        {mostrarCadastro && (
          <CadastroEquipes
            onCadastrar={handleCadastrarEquipe}
            onFechar={() => setMostrarCadastro(false)}
          />
        )}

        {mostrarEdicao && equipeParaEditar && (
          <EditarEquipe
            equipe={equipeParaEditar}
            onEditar={handleEditarEquipe}
            onFechar={() => setMostrarEdicao(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Equipes;

