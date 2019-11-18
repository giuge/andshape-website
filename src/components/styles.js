import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    html {
        box-sizing: border-box;
        overflow-x: hidden;
        background-color: #1C252C;
      }
    *, *:before, *:after {
        box-sizing: inherit;
    }

    :root {
        font-size: 24px;
    }

    body {
        font-family: 'Source Code Pro', monospace;
        -webkit-tap-highlight-color: rgba(0,0,0,.05);
        color: #E4EBFC;
overflow-x: hidden;
    }
    button > a {
        color: inherit;
    }

    a, a:visited, a:active {
        color: #1C3D5A;
        text-decoration: none;
    }

    * {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    ::selection { background: rgba(254, 254, 194, .8); color: #1C252C }
    ::-moz-selection { background: rgba(254, 254, 194, .8); color: #1C252C }
`
