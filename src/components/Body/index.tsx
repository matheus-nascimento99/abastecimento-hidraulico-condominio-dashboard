
import { Informations } from '../../@types/information';
import { WaterTanks } from '../WaterTanks';
import { BottomInformations } from '../BottomInformations';
import { BodyTitle, ChoiceButtons, Container, Elements, SupplyButton } from './styles';
import { Motors } from '../Motors';
import { useState } from 'react';

interface Props {
    data: Informations
}

export const Body = ({ data }: Props) => {

    const [qtdTanks, setQtdTanks] = useState(0);
    const [type, setType] = useState('');
    const [qtdMotors, setQtdMotors] = useState(0);
    const [display, setDisplay] = useState('none');
    const [activatePrincipalSupplyButton, setActivatePrincipalSupplyButton] = useState(false);
    const [activateCastleSupplyButton, setActivateCastleSupplyButton] = useState(false);

    const handlePrincipalSupply = () => {
        setQtdTanks(2);
        setQtdMotors(2);
        setType('Principal');
        setDisplay('block');
        setActivatePrincipalSupplyButton(false);
        setActivateCastleSupplyButton(false);
        setActivatePrincipalSupplyButton(true);
    }

    const handleCastleSupply = () => {
        setQtdTanks(2);
        setQtdMotors(3);
        setType('Castelo');
        setDisplay('block');
        setActivatePrincipalSupplyButton(false);
        setActivateCastleSupplyButton(false);
        setActivateCastleSupplyButton(true);
    }

    return (
        <Container>

            <BodyTitle>Condomínio Flores - Status de tanques e bombas</BodyTitle>
            
            <ChoiceButtons>
                <SupplyButton active={activatePrincipalSupplyButton} onClick={handlePrincipalSupply}>Abastecimento Principal</SupplyButton>
                <SupplyButton active={activateCastleSupplyButton} onClick={handleCastleSupply}>Abastecimento Castelo</SupplyButton>
            </ChoiceButtons>

            <Elements display={display}>
                <WaterTanks data={data} 
                            type={type} 
                            qtdTanks={qtdTanks}/>

                <Motors data={data} qtdMotors={qtdMotors} />

                <BottomInformations data={data} />
            </Elements>

        </Container>
    )
}