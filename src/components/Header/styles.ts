import styled from "styled-components";
import { cores } from "../../styles";

export const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    background-color: ${cores.corPrimaria};
    color: #fff;
    align-items: center;

    p{
    background-color: ${cores.corPrimaria};
    color: ${cores.corSecundaria};
    font-weight: bold;
    text-align: center;
    align-items: center;
    justify-content: center;
    line-height: 50px;
    padding-left: 24px;
    padding-right: 24px;
    font-size: 24px
    }

    div {
        background-color: ${cores.corPrimaria};

        img {
            width: 200px;
            height: 200px;
            object-fit: cover;
            mix-blend-mode: multiply;
            margin-left: 120px;
        }
    }

    nav {
    background-color: ${cores.corPrimaria};
    }
`

export const Data = styled.ul`
    display: flex;
`
