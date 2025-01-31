import { Container, Data } from "./styles"
import logo from '../../assets/LogoPrincipal.png'

const Header = () => {
    function mostrarDataAtual() {
        const data = new Date()
        const dia = data.getDate()
        const mes = data.getMonth() + 1
        const ano = data.getFullYear()
        const dataFormatada = `${dia.toString().padStart(2, '0')}/${mes.toString().padStart(2, '0')}/${ano}`
        return dataFormatada
    }

    const mostrarDiaDaSemana = () => {
        const data = new Date()
        const diasDaSemana = [
            'Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira',
            'Quinta-feira', 'Sexta-feira', 'Sábado'
        ]
        return diasDaSemana[data.getDay()]
    }

    const mostrarHoraAtual = () => {
        const data = new Date();
        const horas = data.getHours();
        const minutos = data.getMinutes();
        const segundos = data.getSeconds();
        return `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
    }
    return (
        <Container>
    <p>Empresa: Biazin Tecnologia</p>
    <div>
        <img src={logo} alt="logo" />
    </div>
    <nav>
        <Data>
            <li>
                <span>
                    <p>{`${mostrarDataAtual()}`}</p>
                </span>
            </li>
            <li>
                <span>
                    <p>{`${mostrarDiaDaSemana()}`}</p>
                </span>
            </li>
            <li>
                <span>
                    <p>{`${mostrarHoraAtual()}`}</p>
                </span>
            </li>
        </Data>
    </nav>
    </Container>
    )
}

export default Header
