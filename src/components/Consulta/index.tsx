import axios from "axios"
import { useState } from "react"

const Consulta = () => {
    const [formData, setFormData] = useState({
        nome: "",
        telefone: "",
        cpf: "",
        rua: "",
        numero: "",
        bairro: "",
        cidade: "",
        uf: ""
    });

    const handleChange = (e: { target: { name: string; value: string } }) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        axios.post(`http://localhost:8080/clientes`, formData)
            .then(response => {
                console.log('Cliente cadastrado com sucesso!', response.data)
            })
            .catch(error => {
                console.error('Ocorreu um erro ao cadastrar o cliente!', error)
            })
    };

    return (
        <>
            <p>Cadastrar cliente</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} />
                </div>
                <div>
                    <input type="text" name="telefone" placeholder="Telefone" value={formData.telefone} onChange={handleChange} />
                </div>
                <div>
                    <input type="text" name="cpf" placeholder="CPF" value={formData.cpf} onChange={handleChange} />
                </div>
                <div>
                    <input type="text" name="rua" placeholder="Rua" value={formData.rua} onChange={handleChange} />
                </div>
                <div>
                    <input type="text" name="numero" placeholder="Número" value={formData.numero} onChange={handleChange} />
                </div>
                <div>
                    <input type="text" name="bairro" placeholder="Bairro" value={formData.bairro} onChange={handleChange} />
                </div>
                <div>
                    <input type="text" name="cidade" placeholder="Cidade" value={formData.cidade} onChange={handleChange} />
                </div>
                <div>
                    <input type="text" name="uf" placeholder="UF" value={formData.uf} onChange={handleChange} />
                </div>
                <button type="submit">Cadastrar</button>
            </form>
        </>
    );
}

export default Consulta
