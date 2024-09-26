import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './EditarEquipe.css';

interface EditarEquipeProps {
  equipe: any;
  onEditar: (equipeAtualizada: any) => void;
  onFechar: () => void;
}

const EditarEquipe: React.FC<EditarEquipeProps> = ({ equipe, onEditar, onFechar }) => {
  const [nomeEquipe, setNomeEquipe] = useState(equipe.nome);
  const [setor, setSetor] = useState(equipe.setor);
  const [supervisores, setSupervisores] = useState<string[]>(equipe.supervisores);
  const [funcionarios, setFuncionarios] = useState<string[]>(equipe.funcionarios);

  const handleAddSupervisor = () => {
    setSupervisores([...supervisores, '']);
  };

  const handleRemoveSupervisor = (index: number) => {
    const newSupervisores = supervisores.filter((_, i) => i !== index);
    setSupervisores(newSupervisores);
  };

  const handleAddFuncionario = () => {
    setFuncionarios([...funcionarios, '']);
  };

  const handleRemoveFuncionario = (index: number) => {
    const newFuncionarios = funcionarios.filter((_, i) => i !== index);
    setFuncionarios(newFuncionarios);
  };

  const handleSupervisorChange = (index: number, value: string) => {
    const newSupervisores = [...supervisores];
    newSupervisores[index] = value;
    setSupervisores(newSupervisores);
  };

  const handleFuncionarioChange = (index: number, value: string) => {
    const newFuncionarios = [...funcionarios];
    newFuncionarios[index] = value;
    setFuncionarios(newFuncionarios);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const equipeAtualizada = {
      nome: nomeEquipe,
      setor,
      supervisores,
      funcionarios,
      numIntegrantes: supervisores.length + funcionarios.length,
    };
    onEditar(equipeAtualizada);
  };

  return (
    <div className="overlay">
      <div className="form-container">
        <h2 className="form-title">Editar Equipe</h2>
        <button className="btn btn-close" onClick={onFechar}>X</button>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control input-custom"
              placeholder="Nome da Equipe"
              value={nomeEquipe}
              onChange={(e) => setNomeEquipe(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control input-custom"
              placeholder="Setor"
              value={setor}
              onChange={(e) => setSetor(e.target.value)}
            />
          </div>

          <h5>Supervisores:</h5>
          {supervisores.map((supervisor, index) => (
            <div className="mb-3 d-flex align-items-center" key={index}>
              <input
                type="text"
                className="form-control input-custom me-2"
                placeholder={`Supervisor ${index + 1}`}
                value={supervisor}
                onChange={(e) => handleSupervisorChange(index, e.target.value)}
              />
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={() => handleRemoveSupervisor(index)}
              >
                Remover
              </button>
            </div>
          ))}
          <div className="text-center mb-3">
            <button type="button" className="btn btn-add" onClick={handleAddSupervisor}>
              Adicionar Supervisor
            </button>
          </div>

          <h5>Funcionários:</h5>
          {funcionarios.map((funcionario, index) => (
            <div className="mb-3 d-flex align-items-center" key={index}>
              <input
                type="text"
                className="form-control input-custom me-2"
                placeholder={`Funcionário ${index + 1}`}
                value={funcionario}
                onChange={(e) => handleFuncionarioChange(index, e.target.value)}
              />
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={() => handleRemoveFuncionario(index)}
              >
                Remover
              </button>
            </div>
          ))}
          <div className="text-center mb-3">
            <button type="button" className="btn btn-add" onClick={handleAddFuncionario}>
              Adicionar Funcionário
            </button>
          </div>

          <button type="submit" className="btn btn-verde-escuro">
            Salvar Alterações
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditarEquipe;

