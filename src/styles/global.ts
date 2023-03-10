import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        max-width: 90%;
        margin: auto;
        
        -webkit-font-smoothing: antialiased;

        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;

        height: 100vh;

        background-color: #5a9ba785;
    }
`;

export const Container = styled.div`
    box-shadow: 0px 5px 5px #7e7e7e;
`;
