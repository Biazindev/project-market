import styled from "styled-components";
import { cores } from "../../styles";

export const Conteudo = styled.div`
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 8px;
    top: 87px;
    background-color: ${cores.CorCont};
    border-radius: 16px;
    height: 350px;

    
`

export const ItemCont = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${cores.CorCont};
    div {
        background-color: transparent;
    }

    input {
        height: 20px;
        border: none;
        width: 187px;
    }
`