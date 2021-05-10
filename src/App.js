import React from 'react';
import styled from 'styled-components';
import ComponenteApartado from "./componentes/ComponenteApartado";

const App = () => {
  return (  
    <>
      <Widget>
          <CampoTexto type="text" id="campText" name="campoTexto"></CampoTexto>
      </Widget>
      <ComponenteApartado/>
    </>
    
  );
}
const Widget = styled.div`
width:100%;
background-color:grey;
padding:30px;
border:5px solid red;
`
const CampoTexto = styled.input`
position: relative;
padding: 10px;
margin: 30px;
`
export default App;
