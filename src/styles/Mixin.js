import { css } from 'styled-components';

export const clearFix = css`
    &::after {
        content: '';
        display: block;
        clear: both;
    }
`;

export const hidden = css`
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    width: 1px;
    height: 1px;
`;

export const textCut = css`
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const textCutMultiline = (line = 2) => css`
    display: -webkit-box;
    -webkit-line-clamp: ${line};
    -webkit-box-orient: vertical;
    overflow: hidden;
    max-height: calc(1.6em * ${line});
    text-overflow: ellipsis;
    white-space: normal;
`;