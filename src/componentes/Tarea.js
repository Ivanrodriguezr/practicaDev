import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 30px;
    background: white;
    margin-top: 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const Button = styled.button`
    margin-right: 5px;
`


const Tarea = (props) => {

    return (
        <Container>
            <div>
                {props.nombre}
            </div>
            <div>
                <Button>
                    boton1 
                </Button>
                <Button>
                    boton 2
                </Button>
            </div>
        </Container>
    )
}

export default Tarea;