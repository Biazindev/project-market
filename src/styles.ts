import { createGlobalStyle } from "styled-components"

export const cores = {
    corPrimaria: '#3d3d3d',
    corSecundaria: '#d2dae2',
    CorCont: '#f1f2f6'
  }

export const GlobalCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
        list-style: none;
        background-color: #dfe4ea;
    }
        .container {
            max-width: 1150px;
            width: 100%;
            margin: 0 auto;
            display: grid;
            align-items: center;
        }
    }`
