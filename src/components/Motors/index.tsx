import { Informations } from "../../@types/information";
import { Container, MotorItemContainer, MotorItemDescription, MotorItemDescriptionsArea, MotorItemTitle } from "./styles";
import motorItem from './assets/water-motor.png';

interface Props {
    data: Informations,
    qtdMotors: number
}

export const Motors = ({data, qtdMotors}: Props) => {
    return (
        <Container>

            {(() => {

                let motorItemContainer = [];

                for (let i = 1; i <= qtdMotors; i++) {

                    motorItemContainer.push(
                        <MotorItemContainer key={i}>
                            <img src={motorItem} alt="" width={200}/>

                            <MotorItemDescriptionsArea>
                                <MotorItemTitle>Bomba {i}</MotorItemTitle>
                                <MotorItemDescription>Status: Operando</MotorItemDescription>
                                <MotorItemDescription>Defeito: Desativado</MotorItemDescription>
                                <MotorItemDescription>Tempo de operação: 1 hora</MotorItemDescription>
                            </MotorItemDescriptionsArea>
                            
                        </MotorItemContainer>
                    );

                }

                return motorItemContainer;

            })()}

        </Container>
        
    );
}