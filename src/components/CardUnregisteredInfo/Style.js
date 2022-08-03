import styled from 'styled-components';
import { color } from '../../styles/Variable';

const { bg } = color;

const CardUnregisteredInfos = styled.div`
    margin-top: 16px;
    padding: 16px;
    border-radius: 8px;
    background: ${bg};

    > p {
        font-size: 12px;
    }
`;

export default CardUnregisteredInfos;