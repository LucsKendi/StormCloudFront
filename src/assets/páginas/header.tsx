import React from "react";
import styles from "./header.module.css"; // Certifique-se de que o caminho esteja correto

interface HeaderProps {
  activePage: "LandPage" | "CadastroAdmin"; // Adicione as páginas que você deseja controlar
}

const Header: React.FC<HeaderProps> = ({ activePage }) => {
  return (
    <header className={styles.header}>
      <h1 className="title" > CloudStorm </h1> 
      <nav>
        
        <ul className={styles.nav}>
          

          <li className={activePage === "LandPage" ? styles.active : styles.inactive}>
            <a href="#">Home</a>
          </li>
          <li className={activePage === "CadastroAdmin" ? styles.active : styles.inactive}>
            <a href="#">Funcionários</a>
          </li>

          
        </ul>

        
      </nav>
      <button className="botão2">Login</button>
    </header>
  );
};

export default Header;
