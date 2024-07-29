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
        color: ${cores.corPrimaria};
        border: 1px solid ${cores.corPrimaria};
        border-bottom: 1px solid ${cores.corPrimaria};

        &.active {
            border-bottom: none;
            color: ${cores.corPrimaria};
            background-color: ${cores.CorCont};
        }

        &:visited,
        &:focus,
        &:hover {
            color: ${cores.corPrimaria};
        }
    }
`

export const Info = styled.div`
    margin-left: 100px;
    margin-top: 48px;
    display: block;
    width: 100%;
`
