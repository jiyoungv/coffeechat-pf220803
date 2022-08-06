import styled from 'styled-components';
import { color } from '../../styles/Variable';
import { textCut, textCutMultiline } from '../../styles/Mixin';
import partner_tab_bg from '../../assets/images/partner_tab_bg.png';

const { midnight700 } = color;

const PortfolioPartners = styled.section`
    .partner-tab {
        position: sticky;
        top: 48px;
        left: 0;
        z-index: 10;
        width: 100%;
        padding: 24px 0 32px;
        background: url(${partner_tab_bg}) center/cover no-repeat;
        
        ul {
            display: flex;
            flex-wrap: wrap;
            margin: -8px;

            li {
                flex: 0 0 calc((100% - 16px * 3) / 3);
                width: calc((100% - 16px * 3) / 3);
                margin: 8px;

                button {
                    display: block;
                    width: 100%;
                    padding: 10.5px 0;
                    border-radius: 4px;
                    background: #fff;
                    font-size: 12px;
                    font-weight: 700;
                    text-align: center;
                }

                &.active {
                    button {
                        background: ${midnight700};
                        color: #fff;
                    }
                }
            }
        }
    }

    .partner-list {
        padding: 32px 0 80px;
        background: #FFF1F6;

        ul {
            li {
                margin-bottom: 16px;

                &:last-child {
                    margin-bottom: 0;
                }

                a {
                    display: block;
                    padding: 16px;
                    border-radius: 8px;
                    background: #fff;                    
                }

                &.type-pm {
                    .partner-list-tag {
                        em {
                            background: linear-gradient(270deg, #E0326E 0%, #FCC9A3 100%), rgba(28, 31, 41, 0.96);
                        }
                    }
                }
                
                &.type-mkt {
                    .partner-list-tag {
                        em {
                            background: linear-gradient(270deg, #E0326E 0%, #FAA6FE 100%), rgba(28, 31, 41, 0.96);
                        }
                    }
                }

                &.type-dev {
                    .partner-list-tag {
                        em {
                            background: linear-gradient(270deg, #E0326E 0%, #01DDFF 100%), rgba(28, 31, 41, 0.96);
                        }
                    }
                }

                &.type-dta {
                    .partner-list-tag {
                        em {
                            background: linear-gradient(270deg, #E0326E 0%, #0115F0 100%), rgba(28, 31, 41, 0.96);
                        }
                    }
                }

                &.type-dg {
                    .partner-list-tag {
                        em {
                            background: linear-gradient(270deg, #E0326E 0%, #B73BF9 100%), rgba(28, 31, 41, 0.96);
                        }
                    }
                }                
            }
        }
    }

    .partner-list-tag {
        display: flex;
        margin-bottom: 8px;

        em, p {
            height: 22px;
            line-height: 22px;
            padding: 0 8px;
            font-size: 11px;
        }

        em {
            border-radius: 4px 0px 0px 4px;
            background: #E0326E;
            color: #fff;
            font-weight: 700;
        }

        p {
            border: 1px solid #E0326E;
            border-left: 0;
            border-radius: 0px 4px 4px 0px;
            line-height: 20px;
        }
    }

    .partner-list-title {
        margin-bottom: 8px;

        h2 {
            font-size: 16px;
            font-weight: 700;
            ${textCutMultiline(2)}
        }
    }

    .partner-list-profile {
        display: flex;
    }

    .partner-list-thumbnail {
        width: 56px;
        height: 56px;
        margin-right: 12px;
        border-radius: 50%;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .partner-list-career {
        width: calc(100% - 56px - 12px);

        h6 {
            font-weight: 700;
        }

        p {
            font-size: 12px;
            ${textCut};
        }        
    }
`;

export default PortfolioPartners;