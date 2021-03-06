import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    margin: 0 auto;
    min-height: 100%;
  }

  body {
    background: #3b3b3b;
    color: #333333;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 13px;
    line-height: 20px;
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
  }

  hr {
    width: 100%;
    margin: 30px auto 0 auto;
    border-top: 1px solid #eeeeee;
  }

  h4 {
    font-size: 20px;
    line-height: 20px;
    font-weight: bold;
    margin: 30px 0 10px 0;
  }

  .react-hooks-paginator .page-item:hover .page-link,
    .react-hooks-paginator .page-item.active .page-link {
      background-color: #3b3b3b;
      border-color: #3b3b3b;
  }

  ul {
    padding-left: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
