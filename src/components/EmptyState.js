import React from 'react';

const EmptyState = ({ onNavigate }) => {
  const handleButtonClick = () => {
    console.log('Botão clicado! Navegando para formulário...');
    onNavigate();
  };

  return (
    <div className="empty-container">
      {}
      <div className="header">
        <div className="header-content">
          <span className="back-arrow">←</span>
          <div className="header-title-container">
            <span className="add-icon">+</span>
            <h1 className="header-title">Cadastrar imóvel</h1>
          </div>
          <div className="header-spacer"></div>
        </div>
      </div>

      {}
      <div className="main-content">
        <div className="welcome-section">
          <h2>Bem-vindo, Raphael!</h2>
        </div>
        
        <div className="status-tabs">
          <button className="tab active">Todos os flats</button>
          <button className="tab">Indisponíveis</button>
        </div>

        <div className="empty-message">
          <p>Você não tem nenhum imóvel cadastrado.</p>
          <p>Que tal cadastrar agora?</p>
        </div>

        <button className="register-button" onClick={handleButtonClick}>
          Cadastrar meu primeiro imóvel
        </button>
      </div>

      {}
      <div className="footer">
        <div className="footer-content">
          <p>UpBase - Desafio Estágio</p>
        </div>
      </div>
    </div>
  );
};

export default EmptyState;