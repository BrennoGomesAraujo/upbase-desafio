import React, { useState } from 'react';
import './App.css';
import EmptyState from './components/EmptyState';
import FormScreen from './components/FormScreen';

function App() {
  const [currentScreen, setCurrentScreen] = useState('empty');

  return (
    <div className="App">
      {currentScreen === 'empty' ? (
        <EmptyState onNavigate={() => setCurrentScreen('form')} />
      ) : (
        <FormScreen onNavigate={() => setCurrentScreen('empty')} />
      )}
    </div>
  );
}

export default App;