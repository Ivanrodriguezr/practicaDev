import React, { useState } from 'react';
import styled from 'styled-components';
import Tarea from './Tarea';

const Widget = styled.div`
    width:100%;
    background-color:grey;
    padding:30px;
    border:5px solid red;
    height: 500px;
`;
const CampoTexto = styled.input`
    position: relative;
    padding: 10px;
    margin: 30px;
`;

const AddButton = styled.button`
    margin-left: 10px;
`;

const Contenedor = () => {
    const [input, setInput] = useState('');
    const [listaDeTareas, setListaDeTareas] = useState([]);

    const inputChange = (ev) => {
        setInput(ev.target.value);
    }

    const onButtonClick = () => {
        setListaDeTareas([ ...listaDeTareas, input ]);
    }
    
    return (
      <Widget>
          <CampoTexto onChange={inputChange} value={input} type="text" id="campText" name="campoTexto"></CampoTexto>
          <AddButton onClick={onButtonClick}>
            Agregar
           </AddButton>
           {
            listaDeTareas.map( tarea => (
                <Tarea nombre={tarea} /> 
            ))
           }
      </Widget>
    )
}


export default Contenedor;

