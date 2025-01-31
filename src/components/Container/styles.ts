import styled from 'styled-components'
import { cores } from '../../styles'

export const Links = styled.ul`
    display: flex;
    list-style: none;
    position: relative;
    top: 70px;
    left: 70px;

    a {
        text-decoration: none;
        font-weight: bold;
        padding: 16px;
        color: ${cores.corSecundaria};
        border: 1px solid ${cores.corSecundaria};
        border-bottom: 1px solid ${cores.corPrimaria};

        &.active {
            border-bottom: none;
            color: ${cores.corSecundaria};
            background-color: ${cores.CorCont};
        }

        &:visited,
        &:focus,
        &:hover {
            color: ${cores.corSecundaria};
        }
    }
`

export const Info = styled.div`
display: flex;
justify-content: center;
margin-top: 16px
`

