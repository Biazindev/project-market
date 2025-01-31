import styled from "styled-components"
import { cores } from "../../styles"

export const Conteudo = styled.div`
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 8px;
    top: 87px;
    background-color: ${cores.CorCont};
    border-radius: 16px;
    height: 350px;

    div {
    width: 250px;
    height: 80%;
    border-radius: 4px;
    margin-left: 8px;
    background-color: transparent;
    }

    input {
    width: 95%;
    height: 80%;
    margin-left: 4px;
    border: none;
    background-color: transparent;
    }
`

export const ContainerButton = styled.div`
    width: 250px;
    background-color: transparent;
    margin-top: -8px;
    button {
    width: 100%;
    color: ${cores.CorCont};
    }
`
