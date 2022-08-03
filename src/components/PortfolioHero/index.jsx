import PortfolioHeros from './Style';
import hero_coupon from '../../assets/images/hero_coupon.png';

function PortfolioHero() {
    return (
        <PortfolioHeros>
            <div className='hero-title'>
                <h1>
                    1:1 포트폴리오 리뷰 커피챗 <br/>
                    5개 분야 OPEN!
                </h1>
                <p>드디어 커피챗이 포트폴리오 리뷰를 오픈했습니다.</p>
                <p>
                    디자인(UXUI, BX) · 서비스기획 · 마케팅 등 <br/>
                    총 5개 분야, 약 50명의 파트너가 모였습니다.
                </p>
                <p>
                    내가 궁금한 기업과 직무의 실제 현직자들에게 <br/>
                    1:1 커피챗으로 나의 포트폴리오 리뷰를 받아 보세요.                    
                </p>
            </div>
            <figure className='hero-img'></figure>
            <div className='hero-coupon'>
                <h2>이벤트 기간동안 전원 10% 할인 쿠폰 증정!</h2>
                <figure>
                    <img src={hero_coupon} alt='포트폴리오 커피챗 1회(40분) 55,000원 → 49,500원' />
                </figure>
            </div>
        </PortfolioHeros>
    );
}

export default PortfolioHero;