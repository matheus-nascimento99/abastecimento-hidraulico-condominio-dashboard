import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    margin-top: 1rem;
    flex-wrap: wrap;
`;

export const MotorItemContainer = styled.div`
    flex: 1 0 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    transition: 0.5s ease;
    border-radius: 0.5rem;
    flex-wrap: wrap;

    :hover {
        background-color: #ddf1f7;
    }
`;

export const MotorItemDescriptionsArea = styled.div`
    
`;

export const MotorItemTitle = styled.h3`

`;

export const MotorItemDescription = styled.p`
    font-weight: bold;
    color: #3c74ad;
`;