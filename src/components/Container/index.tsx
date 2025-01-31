import React, { useState } from 'react'
import { Info, Links } from './styles'
import { useNavigate } from 'react-router-dom'

const Container: React.FC = () => {
    const [activeLink, setActiveLink] = useState<number>(0);
    const navigate = useNavigate();

    const Action = (index: number): void => {
        setActiveLink(index);
        switch(index) {
            case 0:
                navigate('/');
                break;
            case 4:
                navigate('/categorias');
                break;
            case 5:
                navigate('/Produtos');
                break;
                case 6:
                navigate('/PDV');
                break;
            default:
                break;
        }
    }

    return (
        <>
            <Info>
              <h1>
                  Produtos
                </h1>
              </Info>
            <div className="container">
                <nav>
                    <Links>
                        {['Dados Básicos', 'Estoque', 'Fiscal', 'Relatórios', 'Clientes', 'Produtos', 'PDV'].map((text, index) => (
                            <li key={index}>
                                <a
                                    href="#"
                                    className={activeLink === index ? 'active' : ''}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        Action(index);
                                    }}
                                >
                                    {text}
                                </a>
                            </li>
                        ))}
                    </Links>
                </nav>
            </div>
        </>
    )
}

export default Container
