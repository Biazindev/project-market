import axios from "axios";
import { useState, ChangeEvent, FormEvent } from "react";
import { ButtonContainer } from "../Clientes/styles";
import { Conteudo, ItemCont } from "./styles";

const PDV = () => {
    const [formData, setFormData] = useState({
        nome: ""
    });
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        axios.post(`http://localhost:8080/PDV`, formData)
            .then(response => {
                console.log('Produto cadastrado com sucesso!', response.data);
                setSuccessMessage("PDV cadastrado com sucesso!");
                // Limpar o formulário após o sucesso
                setFormData({ nome: "" });
            })
            .catch(error => {
                console.error('Ocorreu um erro ao cadastrar o produto!', error);
            });
    };

    return (
        <Conteudo>
            <form onSubmit={handleSubmit}>
                <div className="container">
                    {successMessage && <div style={{ color: 'green', textAlign: 'center' }}>{successMessage}</div>}
                    <ItemCont>
                        <input
                            type="text"
                            name="nome"
                            placeholder="Digite aqui Caixa da venda:"
                            value={formData.nome}
                            onChange={handleChange}
                        />
                    </ItemCont>
                    <ItemCont>
                        <ButtonContainer type="submit">Cadastrar</ButtonContainer>
                    </ItemCont>
                </div>
            </form>
        </Conteudo>
    );
};

export default PDV;
