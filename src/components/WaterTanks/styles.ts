import styled from "styled-components";

interface WaterTankItemNivelProps {
    nivel: number
}

export const Container = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

export const WaterTankItemTitle = styled.h3`
    margin: 1rem 0 0 0;
`;

export const WaterTankItemDescription = styled.p`
    font-weight: bold;
    color: #3c74ad;
`;

export const WaterTankItemContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    transition: 0.5s ease;
    border-radius: 0.5rem;

    :hover {
        background-color: #ddf1f7;
    }
`;

export const WaterTankItem = styled.div`
    border: 2px solid #5ac4da;
    height: 350px;
    width: 200px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    overflow: hidden; 
    box-shadow: 0px 5px 5px #b5b5b5;
    position: relative;
    background-color: white;
`;

export const WaterTankDetailsArea = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    line-height: 1rem;
    height: 78%;
    z-index: 50000;
`;

export const WaterTankDetails = styled.p`
    font-weight: bold;
    margin: 0.95rem;
`;

export const WaterTankItemNivel = styled.div<WaterTankItemNivelProps>`
    width: 1000px;
    height: 500%;
    position: absolute;
    top: calc(100% - ${props => props.nivel}%);
    transition: 0.5s ease;
    background-color: rgba(90, 196, 218, 0.6);
    border-radius:45%;
    opacity: 1;
    z-index: 9999;
    animation: wave 15s infinite linear; 

    ::before {
        content: '';
        width: 100%;
        height: 100%;
        transition: 0.5s ease;
        position: absolute;
        background-color: rgba(90, 196, 218, 0.6);
        border-radius:43%;
        opacity: .7;
        animation: wave2 14s infinite linear; 
    }

    ::after {
        content: '';
        width: 100%;
        height: 100%;
        transition: 0.5s ease;
        position: absolute;
        background-color: rgba(90, 196, 218, 0.6);
        border-radius:41%;
        opacity: .5;
        animation: wave3 13s infinite linear; 
    }

    @keyframes wave {
        from { 
            transform: rotate(0deg);
        }
        to {
            transform: rotate(180deg);
        }
    }

    @keyframes wave2 {
        from { 
            transform: rotate(180deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    @keyframes wave3 {
        from { 
            transform: rotate(0deg);
        }
        to {
            transform: rotate(270deg);
        }
    }
`;