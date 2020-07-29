import React from 'react';
import PageDefault from '../../../components/PageDefault';
import styled from 'styled-components';

const MainH1 = styled.div`
    height: 10em;
    display: flex;
    align-items: center;
    justify-content: center;
`;


function imprimePagina404() {
    return (
        <PageDefault>

            <MainH1>
               <h1>404 - Página não encontrada...</h1> 
            </MainH1>

        </PageDefault>
    )
}

export default imprimePagina404;