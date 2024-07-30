import { useEffect, useState } from 'react'
import { Container, ButtonContainer, Consulte, Tabela, CabecalhoTabela, LinhaTabela, CelulaTabela } from './styles'

export interface Cliente {
    id: number
    nome: string
    cpf: number
    Email: string
    telefone: number
    rua: string
    numero: number
    bairro: string
    cidade: string
    uf: string
    vendas: []
}

const Cliente = () => {
    const [items, setItems] = useState<Cliente[]>([]);
    const [id, setId] = useState<number | null>(null);

    useEffect(() => {
        if (id !== null) {
            fetch(`http://localhost:8080/clientes/${id}`)
                .then(res => res.json())
                .then((data: Cliente | Cliente[]) => {
                    console.log('Dados recebidos da API:', data);
                    if (Array.isArray(data)) {
                        setItems(data);
                    } else {
                        setItems([data]);
                    }
                })
                .catch(err => console.error("Falha ao buscar dados", err));
        }
    }, [id]);

    const handleSearch = () => {
        const inputId = (document.getElementById('clientIdInput') as HTMLInputElement).value;
        if (inputId) {
            setId(Number(inputId));
        }
    }

    return (
        <>
            <Container>
                <h2>Consulta de clientes</h2>
                <Consulte>
                    <input id="clientIdInput" placeholder='Digite ID para pesquisar' type="text" />
                </Consulte>
                <ButtonContainer onClick={handleSearch}>Buscar</ButtonContainer>
            </Container>
            <Tabela>
                <thead>
                    <tr>
                        <CabecalhoTabela>Nome</CabecalhoTabela>
                        <CabecalhoTabela>Endereço</CabecalhoTabela>
                        <CabecalhoTabela>Telefone</CabecalhoTabela>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(items) && items.map(cliente => (
                        <LinhaTabela key={cliente.id}>
                            <CelulaTabela>
                            <p>{cliente.nome}</p>
                            </CelulaTabela>
                            <CelulaTabela>
                                <p>Rua:{cliente.rua}, Bairro: {cliente.bairro}</p>
                            </CelulaTabela>
                            <CelulaTabela>{cliente.telefone}</CelulaTabela>
                        </LinhaTabela>
                    ))}
                </tbody>
            </Tabela>
        </>
    )
}

export default Cliente;
