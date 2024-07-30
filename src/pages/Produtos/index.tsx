import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ClienteList } from "../Home"
import axios from "axios"
import Header from "../../components/Header"
import Consulta from "../../components/Consulta"
import Clientes from "../../components/Clientes"
import Container from "../../components/Container"
import Produtos from "../../components/Produtos"

const BASE_URL = 'https://localhost:8080'


const CategoriasProd = () => {
    
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
            <div className="container">
            <Container />    
            <Produtos />
            </div>
        </>
    )
}

export default CategoriasProd
