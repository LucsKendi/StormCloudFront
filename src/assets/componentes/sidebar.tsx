import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sidebar.css';

interface SidebarProps {
  activePage: string; 
}

const Sidebar: React.FC<SidebarProps> = ({ activePage }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`sidebar ${isExpanded ? 'expanded' : ''}`}>
      <button className="navbar-toggle btn text-white" onClick={toggleSidebar}>
        &#9776;
      </button>
      
      {/* Mostra os links somente se a sidebar estiver expandida */}
      {isExpanded && (
        <nav className="nav flex-column">
          <a 
            className={`nav-link text-white ${activePage === 'equipes' ? 'active-link' : ''}`} 
            href="/equipes"
          >
            Equipes
          </a>
          <a 
            className={`nav-link text-white ${activePage === 'funcionarios' ? 'active-link' : ''}`} 
            href="/funcionarios"
          >
            Funcionários
          </a>
          <a 
            className={`nav-link text-white ${activePage === 'questionarios' ? 'active-link' : ''}`} 
            href="/questionarios"
          >
            Questionários
          </a>
          <a 
            className={`nav-link text-white ${activePage === 'configuracoes' ? 'active-link' : ''}`} 
            href="/configuracoes"
          >
            Configurações
          </a>
        </nav>
      )}
      
      {isExpanded && (
        <button className="btn btn-outline-light mt-auto logout-button">Logout</button>
      )}
    </div>
  );
};

export default Sidebar;

