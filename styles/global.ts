import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    font-size: 16px;
    font-family: "Roboto", sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${props => props.theme.colors.background};
    overflow-y: auto;
    overflow-x: hidden;
  }
`