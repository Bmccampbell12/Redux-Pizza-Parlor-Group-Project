import React from 'react';
import './App.css';
import PizzaList from '../PizzaList/PizzaList';
import PizzaForm from '../PizzaForm/PizzaForm';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  
      <img src='images/pizza_photo.png' />
    <PizzaList />
    <PizzaForm />
    </div>
  );
}

export default App;
