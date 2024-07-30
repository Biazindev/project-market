import axios from "axios"
import { useState } from "react"
import { ButtonContainer } from "../Clientes/styles"
import { ContainerButton, Conteudo } from "./styles"

const Produto = () => {
    const [formData, setFormData] = useState({
        nome: "",
        descricao: "",
        preco: "",
        tipo: "",
        ean: "",
        dataCadastro: "",
        estoque: "",
        vendas: []
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const dataToSend = {
            ...formData,
            preco: parseFloat(formData.preco),
            dataCadastro: formData.dataCadastro ? new Date(formData.dataCadastro) : null
        }
        axios.post(`http://localhost:8080/produtos`, dataToSend)
            .then(response => {
                console.log('Produto cadastrado com sucesso!', response.data)
            })
            .catch(error => {
                console.error('Ocorreu um erro ao cadastrar o produto!', error)
            });
    }

    return (
        <form onSubmit={handleSubmit}>
            <Conteudo className="container">
                <div>
                    <input
                        type="text"
                        name="nome"
                        placeholder="Digite aqui nome produto:"
                        value={formData.nome}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="descricao"
                        placeholder="Digite aqui descricao:"
                        value={formData.descricao}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="number"
                        step="0.01"
                        name="preco"
                        placeholder="Digite aqui valor:"
                        value={formData.preco}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="tipo"
                        placeholder="Digite aqui tipo:"
                        value={formData.tipo}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="ean"
                        placeholder="Digite aqui ean:"
                        value={formData.ean}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="date"
                        name="dataCadastro"
                        placeholder="Digite aqui data do cadastro:"
                        value={formData.dataCadastro}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="number"
                        name="estoque"
                        placeholder="Digite aqui quantidade em estoque:"
                        value={formData.estoque}
                        onChange={handleChange}
                    />
                </div>
                <ContainerButton>
                    <ButtonContainer type="submit">Cadastrar</ButtonContainer>
                </ContainerButton>
            </Conteudo>
        </form>
    )
}

export default Produto
