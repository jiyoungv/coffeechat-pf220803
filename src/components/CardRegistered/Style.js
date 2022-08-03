import styled from 'styled-components';
import { color } from '../../styles/Variable';

const { brand100, brand200, brand500 } = color;

const CardRegistereds = styled.article`
    padding: 24px;
    border: 1px solid ${brand500};
    border-radius: 8px;
    background: ${brand100};

    > .card-top {
        display: flex;
        justify-content: space-between;
        align-items: center;

        > h6 {
            color: ${brand500};
            font-size: 16px;
            font-weight: 700;
        }
    }

    > .card-bottom {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-top: 50px;
    }

    .card-number {
        display: flex;
        
        > li {
            margin-right: 4px;
            color: ${brand500};
            font-size: 13px;

            &:last-child {
                margin-right: 0;
            }
        }
    }

    .card-credit {
        display: flex;
        margin-top: 4px;

        > li {
            position: relative;
            padding: 0 8px;
            color: ${brand500};
            font-size: 12px;
            font-weight: 700;

            &::after {
                content: '';
                display: block;
                position: absolute;
                top: calc(50% + 1px);
                right: 0;
                transform: translateY(-50%);
                width: 1px;
                height: 12px;
                background: ${brand500};
            }

            &:first-child {
                padding-left: 0;
            }

            &:last-child {
                padding-right: 0;

                &::after {
                    display: none;
                }
            }
        }
    }

    .card-delete {
        padding: 4.5px 15px;
        border: 1px solid ${brand200};
        border-radius: 8px;
        color: ${brand500};
        font-size: 13px;
        font-weight: 700;
    }
`;

export default CardRegistereds;