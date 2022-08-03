import styled from 'styled-components';
import { gutter } from '../../styles/Variable';
import hero_img from '../../assets/images/hero_img.png';

const PortfolioHeros = styled.article`
    padding-top: 32px;

    .hero-title {
        h1 {
            margin-bottom: 8px;
            font-size: 24px;
            font-weight: 700;
            letter-spacing: -0.03em;
        }

        p {
            margin-bottom: 8px;

            &:last-of-type {
                margin-bottom: 0;
            } 
        }
    }

    .hero-img {
        position: relative;
        left: -${gutter};
        width: calc(100% + ${gutter} * 2);
        height: 276px;
        margin-top: 10px;
        background: url(${hero_img}) right center/375px no-repeat;
    }

    .hero-coupon {
        padding: 24px 0 40px;

        h2 {
            margin-bottom: 8px;
            font-size: 16px;
            font-weight: 700;
        }

        figure {
            
        }
    }
`;

export default PortfolioHeros;