import React from 'react';
import Contenedor from "./componentes/Contenedor";
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
`;

const App = () => {
  return (  
    <Container>
      <Contenedor />
    </Container>
    
  );
}

export default App;
