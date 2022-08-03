import styled from 'styled-components';
import { color } from '../../styles/Variable';

const { brand500 } = color;

const CardUnregistereds = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 170px;
    border: 1px solid ${brand500};
    border-radius: 8px;

    .card-title {
        margin-bottom: 16px;
        color: ${brand500};
        text-align: center;
    }

    .card-icon {
        text-align: center;
        
        > figure {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            border: 1px solid ${brand500};
            border-radius: 50%;
        }
    }

    .card-text {
        margin-top: 16px;

        > p {
            font-size: 12px;
        }
    }
`;

export default CardUnregistereds;