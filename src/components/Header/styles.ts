import styled from "styled-components";
import { cores } from "../../styles";

export const Container = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    background-color: ${cores.corPrimaria};
    color: #fff;

    p{
    background-color: ${cores.corPrimaria};
    color: ${cores.corSecundaria};
    font-weight: 400;
    text-align: center;
    align-items: center;
    justify-content: center;
    line-height: 50px;
    padding-left: 24px;
    padding-right: 24px;
    }

    div {
        background-color: ${cores.corPrimaria};

        img {
            width: 100px;
            height: 50px;
            object-fit: cover;
        }
    }

    nav {
    background-color: ${cores.corPrimaria};
    }
`

export const Data = styled.ul`
    display: flex;
`