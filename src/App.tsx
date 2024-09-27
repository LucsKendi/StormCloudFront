import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Funcionários from './assets/páginas/Funcionários';
import Equipes from './assets/páginas/Equipes';
import Perguntas from './assets/páginas/Perguntas';
import CadastroAdmin from './assets/páginas/CadastroAdmin';
import LoginAdmin from './assets/páginas/LoginAdmin';
import RedefinirSenha from './assets/páginas/RedefinirSenha';
import LandPage from './assets/páginas/LandingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandPage />} />
        <Route path="/funcionarios" element={<Funcionários />} />
        <Route path="/equipes" element={<Equipes />} />
        <Route path="/perguntas" element={<Perguntas />} />
        <Route path="/cadastro-admin" element={<CadastroAdmin />} />
        <Route path="/login-admin" element={<LoginAdmin />} />
        <Route path="/redefinir-senha" element={<RedefinirSenha />} />
      </Routes>
    </Router>
  );
}

export default App;
