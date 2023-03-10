import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 1rem;
    background-color: white;
`;

export const BodyTitle = styled.h2`
    text-align: center;
`;

export const ChoiceButtons = styled.div`
    display: flex;
    justify-content: center;
    margin: 1rem 0 1rem 0; 
    gap: 1rem;
`

interface SupplyButtonInterface {
    active: boolean
}

export const SupplyButton = styled.button<SupplyButtonInterface>`
    padding: 1rem;
    border-radius: 40px;
    cursor: pointer;
    border: 0;
    font-weight: bold;
    font-size: 15px;
    transition: 0.5s ease;
    background-color: ${(props) => props.active ? '#dedede' : ''};

    :hover {
        background-color: #dedede;
        box-shadow: 0px 0px 2px #969696;
    }
`;

interface ElementsDisplay {
    display: string
}

export const Elements = styled.div<ElementsDisplay>`
    display: ${(props) => props.display};
`;

