import styled from 'styled-components';
import { cores } from '../../styles';

export const Container = styled.div`
    top: 87px;
    max-width: 1024px;
    width: 100%;
    height: 200px;
    background-color: ${cores.CorCont};
    position: relative;
    align-items: center;
    margin: 0 auto;
    display: flex;
    border-radius: 16px;
    justify-content: center;
    flex-direction: column;

    h2 {
        margin: 24px;
        background-color: ${cores.CorCont};
    }

    input {
        background-color: #fff;
        width: 100%;
        border: none;
        padding: 16px;
        text-align: center;
        border-radius: 16px;
    }
`;

export const ButtonContainer = styled.button`
    width: 184px;
    margin-top: 8px;
    background-color: ${cores.CorCont};
    align-items: center;
    justify-content: center;
    padding: 4px;
    border: none;
    background-color: #3742fa;
    border-radius: 4px;
    color: ${cores.corTerciaria};
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        background-color: #70a1ff;
    }
`;

export const Consulte = styled.div`
    background-color: ${cores.CorCont};
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Tabela = styled.table`
    max-width: 1024px;
    width: 100%;
    align-items: center;
    justify-content: center;
    border-collapse: collapse;
    margin-top: 90px;
    margin: 90px auto;

    tbody,
    thead {
        display: inline-table;
        max-width: 1024px;
        width: 100%;
        justify-content: center;
        align-items: center;
    }
`;

export const CabecalhoTabela = styled.th`
    padding: 12px;
    background-color: ${cores.corSecundaria};
    color: white;
    text-align: left;
    border: 1px solid #ddd;
`;

export const LinhaTabela = styled.tr`
    &:nth-child(even) {
        background-color: #f2f2f2;
    }
`;

export const CelulaTabela = styled.td`
    padding: 8px;
    border: 1px solid #ddd;
    text-align: left;
`;
