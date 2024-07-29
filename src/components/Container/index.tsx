import React, { useState } from 'react'
import { Info, Links } from './styles'

const Container: React.FC = () => {
    const [activeLink, setActiveLink] = useState<number>(0);

    const handleClick = (index: number): void => {
        setActiveLink(index);
    }

    return (
        <>
            <Info><h1>Produtos</h1></Info>
            <div className="container">
                <nav>
                    <Links>
                        {['Dados Básicos', 'Estoque', 'Fiscal', 'Relatórios', 'Clientes'].map((text, index) => (
                            <li key={index}>
                                <a
                                    href="#"
                                    className={activeLink === index ? 'active' : ''}
                                    onClick={() => handleClick(index)}
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
