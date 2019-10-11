import React from 'react';
import './App.css';
import Form from './Form/Form';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter><Form /></BrowserRouter>
    </div>
  );
}

export default App;
