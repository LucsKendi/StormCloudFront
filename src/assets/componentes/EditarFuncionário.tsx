import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importação do CSS do Bootstrap
import './CadastroFuncionario.css'; // Estilos personalizados

interface CadastroFuncionarioProps {
  onCadastrar: (novoFuncionario: any) => void;
}

const EditarFuncionario: React.FC<CadastroFuncionarioProps> = ({ onCadastrar }) => {
  const [foto, setFoto] = useState<string | null>(null);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [equipe, setEquipe] = useState('');
  const [supervisor, setSupervisor] = useState('');
  const [setor, setSetor] = useState('');
  const [cpf, setCpf] = useState(''); // Novo estado para CPF

  const handleFotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFoto(e.target?.result as string);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const novoFuncionario = {
      nome,
      email,
      equipe,
      supervisor,
      setor,
      cpf, // Adicionando CPF ao cadastro
      foto,
    };
    onCadastrar(novoFuncionario); // Chama a função de cadastro no componente pai
  };

  return (
    <div className="container-center">
      <div className="form-container">
        <h2 className="form-title">Cadastrar</h2>
        <form onSubmit={handleSubmit}>
          <div className="row equal-height">
            {/* Coluna para Foto */}
            <div className="col-md-4 d-flex flex-column align-items-center justify-content-center">
              <div className="foto-placeholder">
                {foto ? (
                  <img src={foto} alt="Foto escolhida" className="img-fluid" />
                ) : (
                  'Foto'
                )}
              </div>
              <label htmlFor="fotoInput" className="mt-2 escolher-foto-text" style={{ cursor: 'pointer' }}>
                Escolher foto
              </label>
              <input
                type="file"
                id="fotoInput"
                style={{ display: 'none' }}
                accept="image/*"
                onChange={handleFotoChange}
              />
            </div>

            {/* Coluna para os Inputs */}
            <div className="col-md-8 d-flex flex-column justify-content-between">
              <div className="row">
                <div className="col-md-12 mb-3">
                  <input
                    type="text"
                    className="form-control input-custom"
                    placeholder="Nome Completo"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                  />
                </div>

                <div className="col-md-12 mb-3">
                  <input
                    type="email"
                    className="form-control input-custom"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <select
                    className="form-control input-custom"
                    value={equipe}
                    onChange={(e) => setEquipe(e.target.value)}
                  >
                    <option>Equipe</option>
                    <option>Equipe A</option>
                    <option>Equipe B</option>
                  </select>
                </div>

                <div className="col-md-6 mb-3">
                  <select
                    className="form-control input-custom"
                    value={supervisor}
                    onChange={(e) => setSupervisor(e.target.value)}
                  >
                    <option>Supervisor</option>
                    <option>Supervisor 1</option>
                    <option>Supervisor 2</option>
                  </select>
                </div>

                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control input-custom"
                    placeholder="Setor"
                    value={setor}
                    onChange={(e) => setSetor(e.target.value)}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control input-custom"
                    placeholder="CPF"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            <button type="submit" className="btn btn-custom">Cadastrar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditarFuncionario;
