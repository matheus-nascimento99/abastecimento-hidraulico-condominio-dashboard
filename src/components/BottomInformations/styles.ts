import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    padding: 1rem;
    background-color: #eee;
    width: 100%;
    border-radius: 50px;
    box-shadow: 0px 5px 5px #b5b5b5;
    transition: 0.2s ease;

    :hover {
        box-shadow: 0px 6px 6px #969696;
        background-color: #dedede;
    }
`;

export const InformationArea = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    :first-child{
        flex: 2;
    }
`;

export const Information = styled.h4`
    color: black;
`;