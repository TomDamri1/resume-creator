import React from 'react';
import './App.css';
import Form from './Form/Form';
import {BrowserRouter} from 'react-router-dom';
import { FormProvider } from './Form/FormContext';

function App() {
  return (
    <div className="App">
      <FormProvider>
      <BrowserRouter><Form /></BrowserRouter>
      </FormProvider>
    </div>
  );
}

export default App;
