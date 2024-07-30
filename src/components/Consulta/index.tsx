import axios from "axios";
import { useState } from "react";
import { ContainerButton, Conteudo } from "./styles";
import { ButtonContainer } from "../Clientes/styles";

const Consulta = () => {
    const [formData, setFormData] = useState({
        nome: "",
        telefone: "",
        cpf: "",
        rua: "",
        numero: "",
        bairro: "",
        cidade: "",
        uf: "",
        email: ""
    });

    const envia = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const cadastrar = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios.post(`http://localhost:8080/clientes`, formData)
            .then(response => {
                console.log('Cliente cadastrado com sucesso!', response.data);
            })
            .catch(error => {
                console.error('Ocorreu um erro ao cadastrar o cliente!', error);
            });
    };

    return (
        <>
            <form onSubmit={cadastrar}>
                <Conteudo className="container">
                    <div>
                        <input type="text" name="nome" placeholder="Digite aqui seu nome:" value={formData.nome} onChange={envia} />
                    </div>
                    <div>
                        <input type="text" name="telefone" placeholder="Digite aqui seu Telefone:" value={formData.telefone} onChange={envia} />
                    </div>
                    <div>
                        <input type="text" name="cpf" placeholder="Digite aqui seu CPF:" value={formData.cpf} onChange={envia} />
                    </div>
                    <div>
                        <input type="text" name="rua" placeholder="Digite aqui sua Rua:" value={formData.rua} onChange={envia} />
                    </div>
                    <div>
                        <input type="text" name="numero" placeholder="Digite aqui seu Número:" value={formData.numero} onChange={envia} />
                    </div>
                    <div>
                        <input type="text" name="bairro" placeholder="Digite aqui seu Bairro:" value={formData.bairro} onChange={envia} />
                    </div>
                    <div>
                        <input type="text" name="cidade" placeholder="Digite aqui sua Cidade:" value={formData.cidade} onChange={envia} />
                    </div>
                    <div>
                        <input type="text" name="uf" placeholder="Digite aqui UF:" value={formData.uf} onChange={envia} />
                    </div>
                    <div>
                        <input type="email" name="email" placeholder="Digite aqui seu Email:" value={formData.email} onChange={envia} />
                    </div>
                    <ContainerButton>
                        <ButtonContainer type="submit">Cadastrar</ButtonContainer>
                    </ContainerButton>
                </Conteudo>
            </form>
        </>
    );
}

export default Consulta;
