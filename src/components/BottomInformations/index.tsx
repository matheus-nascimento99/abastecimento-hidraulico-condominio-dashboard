
import { Informations } from '../../@types/information';
import { DateFormatter } from '../../utils/formatter';
import { Container, Information, InformationArea } from './styles';

interface Props {
    data: Informations
}

export const BottomInformations = ({data}: Props) => {

    return (
        <Container>
            <InformationArea>
                <Information>Pressão recalque: 8 bar</Information>
            </InformationArea>
        </Container>
    );
}