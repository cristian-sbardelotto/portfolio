import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    height: 100%;

    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #8885;
      border-radius: 5px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background-color: #8888;
    }

    ::-webkit-scrollbar-thumb:active {
      background-color: #888;
    }

    ::-webkit-scrollbar-track {
      background-color: transparent;
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-family: Inter, sans-serif;


    &::selection {
      background-color: #98ff96;
      color: ${({ theme }) => theme.colors.background};
    }
  }

  body {
    height: 100%;
    padding-top: 10rem;

    color: ${({ theme }) => theme.colors.lightText};
    background-color: ${({ theme }) => theme.colors.lightBackground};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.lightText};
  }
`;
