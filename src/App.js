import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserForm from './Form'
import styled from 'styled-components';


function App() {

  return (
    <div className="App">
      <UserForm name = "cameron" email = "cmrnmr@gmail.com" password = "hershey" />
    </div>
  );
}

export default App;
