import React from 'react';

const FormScreen = ({ onNavigate }) => {
  const handleBackClick = () => {
    console.log('Voltando para tela inicial...');
    onNavigate();
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <button className="back-button" onClick={handleBackClick}>
          ← 
        </button>
        <h2>  Cadastrar imóvel</h2>
      </div>

      <div className="form-content">
        <div className="form-section">
          <p>Para começarmos, precisamos de alguns dados:</p>
        </div>

        <div className="form-fields">
          <div className="input-group">
            <label>Nome do imóvel</label>
            <input type="text" placeholder="Digite o nome do imóvel" />
            <small>O nome do imóvel será exibido na sua tela inicial e na reserva para o hospede</small>
          </div>

          <div className="input-group">
            <label>Descrição</label>
            <input type="text" placeholder="Digite a descrição" />
            
          </div>

          <div className="input-row">
            <div className="input-group">
              <label>CEP</label>
              <input type="text" placeholder="Digite o CEP" />
            </div>
            <div className="input-group">
              <label>Endereço</label>
              <input type="text" placeholder="Digite o endereço" />
            </div>
          </div>

          <div className="input-row">
            <div className="input-group">
              <label>Número</label>
              <input type="text" placeholder="Número" />
            </div>
            <div className="input-group">
              <label>Cidade</label>
              <input type="text" placeholder="Cidade" />
            </div>
          </div>

          <button className="submit-button">
            Cadastrar Imóvel
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormScreen;