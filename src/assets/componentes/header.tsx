import React from "react";
import styles from "./header.module.css"; // Certifique-se de que o caminho esteja correto

interface HeaderProps {
  activePage: "equipes" | "funcionarios"; // Adicione as páginas que você deseja controlar
}

const Header: React.FC<HeaderProps> = ({ activePage }) => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.nav}>
          <li className={activePage === "equipes" ? styles.active : styles.inactive}>
            <a href="#">Equipes</a>
          </li>
          <li className={activePage === "funcionarios" ? styles.active : styles.inactive}>
            <a href="#">Funcionários</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
