import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        border: none;
        box-sizing: border-box;
    }

    h1, h2, button, input, div{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    }
`