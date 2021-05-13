import React, { useState } from 'react';
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
 
const {deleteT , tarea, update} = props;

    const onButtonClickDelete = () => {
        deleteT(tarea.id);
    }

    const onButtonClickUpdate = () => {
        update(tarea.id)

    }


    return (
        <Container>
            <div>
                {tarea.nombre}
            </div>
            <div>
                <Button onClick={onButtonClickDelete}>
                    Delete 
                </Button>
                <Button onClick={onButtonClickUpdate}>
                    Update
                </Button>
            </div>
        </Container>
    )
}

export default Tarea;