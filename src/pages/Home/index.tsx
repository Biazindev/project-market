import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Header from "../../components/Header"
import Container from "../../components/Container"
import Cliente from "../../components/Clientes"

export type ClienteList = {
    id: number
    nome: string
    cpf: string
    telefone: string
    email: string
    rua: string
    numero: number
    bairro: string
    cidade: string
    uf: string
}

const BASE_URL = 'https://localhost:8080'

const Home = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [consulta, setConsulta] = useState<ClienteList[]>([])

    useEffect(() => {
        axios.get(`${BASE_URL}/clientes/${id}`)
            .then(response => setConsulta(response.data))
            .catch(error => console.error('Ocorreu um erro ao buscar a lista de itens!', error))

        if (id) {
            axios.post(`${BASE_URL}/clientes/${id}`)
                .then(response => setConsulta([response.data]))
                .catch(error => console.error('Ocorreu um erro ao buscar o item!', error))
        }
    }, [id]);

    return (
        <>
            <Header />
            <Container />
            <Cliente />
        </>
    )
}

export default Home
