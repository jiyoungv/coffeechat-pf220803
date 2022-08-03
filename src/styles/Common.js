import styled from 'styled-components';
import { clearFix, hidden } from './Mixin';
import { color, maxWidth, gutter } from './Variable';
import icon_arrow_left from '../assets/images/icon_arrow_left.svg';
import icon_close from '../assets/images/icon_close.svg';

const { midnight500 } = color;

export const Inners = styled.div`
    position: relative;
    height: 100%;
    margin: 0 ${gutter};
    ${clearFix}
`;

export const Layouts = styled.div`
    min-width: 320px;
    max-width: ${maxWidth};
    margin: 0 auto;
`;

export const Headers = styled.section`
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    width: calc(100% + ${gutter} * 2);
    height: 48px;
    margin-left: -${gutter};
    background: white;

    ${props => props.type === 2 && `
        width: 100%;
        margin-left: 0;
    `}

    > .left-button {
        position: absolute;
        top: 0;
        left: 12px;
        width: 48px;
        height: 48px;
        background: center/auto no-repeat;

        &.back-button {
            background-image: url(${icon_arrow_left});
        }

        &.close-button {
            background-image: url(${icon_close});
        }        

        .left-button-text {
            ${hidden}
        }        
    }

    > .header-title {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;

        > p {
            font-size: 16px;
        }
    }

    > .right-button {
        position: absolute;
        top: 0;
        right: 12px;
        height: 48px;

        > a {
            display: inline-block;
            height: 48px;
            line-height: 48px;
            padding: 0 12px;
            color: ${midnight500};
            font-weight: 700;
        }
    }
`;