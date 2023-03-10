import { Informations } from '../../@types/information';
import { Container, WaterTankDetails, WaterTankDetailsArea, WaterTankItem, WaterTankItemContainer, WaterTankItemDescription, WaterTankItemNivel, WaterTankItemTitle } from './styles';

interface Props {
    data: Informations,
    type: string,
    qtdTanks: number
}

export const WaterTanks = ({data, type, qtdTanks}: Props) => {

    return (
        <Container>

            {(() => {

                let waterItemContainer = [];

                for (let i = 1; i <= qtdTanks; i++) {

                    waterItemContainer.push(
                        <WaterTankItemContainer key={i}>
                            <WaterTankItem>
                                <WaterTankItemNivel nivel={100}/>
                            </WaterTankItem>
                            <WaterTankItemTitle>Reservatório {type} {i}</WaterTankItemTitle>
                            <WaterTankItemDescription>Nível: 100%</WaterTankItemDescription>
                        </WaterTankItemContainer>
                    );

                }

                return waterItemContainer;

            })()}

        </Container>
    );
}