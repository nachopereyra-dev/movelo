import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SideBar from './SideBar';
import SeccionContenedorPrincipal from './SeccionContenedorPrincipal'

function App() {
  return (
    <BrowserRouter>
      	<div id="wrapper" style={{backgroundImage: 'url(/images/vectors/Path-230.svg)'}}>
          <SideBar />
          <SeccionContenedorPrincipal />
        </div>
    </BrowserRouter>
  );
}

export default App;

