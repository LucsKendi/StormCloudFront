import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './equipes.css';
import Header from './header';

const Equipes: React.FC = () => {
  return (
    <div className="equipes-page d-flex">

      <div className="sidebar bg-verde-escuro">
        <button className="navbar-toggle btn text-white">&#9776;</button>
      </div>

      <div className="content flex-grow-1 p-4">

        <div className="d-flex my-3">
          <button className="btn btn-verde-claro mx-2">Cadastrar</button>
          <button className="btn btn-verde-claro mx-2">Editar</button>
          <button className="btn btn-verde-claro mx-2">Deletar</button>
        </div>
        
        {/* Divider */}
        <hr className="divider" />

        <table className="table table-hover table-sm rounded overflow-hidden zebra-table">
          <thead className="bg-white text-secondary">
            <tr>
              <th>Equipe</th>
              <th>Data</th>
              <th>Salário</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ByeWind</td>
              <td>Jun 24, 2022</td>
              <td>$942.00</td>
              <td><span className="badge bg-success">Complete</span></td>
            </tr>
            <tr>
              <td>Natali Craig</td>
              <td>Mar 10, 2022</td>
              <td>$881.00</td>
              <td><span className="badge bg-warning text-dark">Pending</span></td>
            </tr>
            <tr>
              <td>Drew Cano</td>
              <td>Nov 10, 2022</td>
              <td>$409.00</td>
              <td><span className="badge bg-info text-white">Aguardando Resposta</span></td>
            </tr>
            <tr>
              <td>Orlando Diggs</td>
              <td>Dec 20, 2022</td>
              <td>$953.00</td>
              <td><span className="badge bg-info text-white">Pending</span></td>
            </tr>
            <tr>
              <td>Andi Lane</td>
              <td>Jul 25, 2022</td>
              <td>$907.00</td>
              <td><span className="badge bg-danger">Rejected</span></td>
            </tr>
          </tbody>
        </table>
        
        <hr className="divider" />
        
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card bg-light text-center card-height">
              <div className="card-body">
                <h5 className="card-title">Card 1</h5>
                <button className="btn btn-verde-claro">Expandir</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-light text-center card-height">
              <div className="card-body">
                <h5 className="card-title">Card 2</h5>
                <button className="btn btn-verde-claro">Expandir</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-light text-center card-height">
              <div className="card-body">
                <h5 className="card-title">Card 3</h5>
                <button className="btn btn-verde-claro">Expandir</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipes;
