import shortid from 'shortid';
import partner_thumbnail1 from '../assets/images/temp/partner_thumbnail1.png';
import partner_thumbnail2 from '../assets/images/temp/partner_thumbnail2.jpg';
import partner_thumbnail3 from '../assets/images/temp/partner_thumbnail3.png';

const partnerData = [
    {
        id: shortid.generate(),
        tag: 'PM',
        title: '제목 한줄',
        nickname: '기태',
        company: '회사이름 한줄까지 회사이름 한줄까지 회사이름 한줄까지 회사이름 한줄까지',
        job: '직무명 한줄까지 직무명 한줄까지 직무명 한줄까지 직무명 한줄까지',
        thumbnail: partner_thumbnail1,
        link: 'https://www.coffeechat.kr/designerPortfolioReview/Zelato',
    },
    {
        id: shortid.generate(),
        tag: 'PM',
        title: '제목 한줄',
        nickname: '기태2',
        company: '회사이름 한줄까지 회사이름 한줄까지 회사이름 한줄까지 회사이름 한줄까지',
        job: '직무명 한줄까지 직무명 한줄까지 직무명 한줄까지 직무명 한줄까지',
        thumbnail: partner_thumbnail2,
        link: 'https://www.coffeechat.kr/designerPortfolioReview/Zelato',
    },    
    {
        id: shortid.generate(),
        tag: 'MKT',
        title: '제목 두줄 제목 두줄 제목 두줄 제목 두줄 제목 두줄 제목 두줄',
        nickname: '마리',
        company: '토스 Toss',
        job: '마케터',
        thumbnail: partner_thumbnail3,
        link: 'https://www.coffeechat.kr/designerPortfolioReview/Zelato',
    },
    {
        id: shortid.generate(),
        tag: 'MKT',
        title: '제목 두줄 제목 두줄 제목 두줄 제목 두줄 제목 두줄',
        nickname: '마리2',
        company: '토스 Toss',
        job: '마케터',
        thumbnail: partner_thumbnail1,
        link: 'https://www.coffeechat.kr/designerPortfolioReview/Zelato',
    },    
    {
        id: shortid.generate(),
        tag: 'DEV',
        title: '제목 두줄 초과 제목 두줄 초과 제목 두줄 초과 제목 두줄 초과 제목 두줄 초과 제목 두줄 초과 제목 두줄 초과',
        nickname: '개굴',
        company: '네이버 Naver',
        job: '프론트엔드 개발자',
        thumbnail: partner_thumbnail2,
        link: 'https://www.coffeechat.kr/designerPortfolioReview/Zelato',
    },
    {
        id: shortid.generate(),
        tag: 'DEV',
        title: '제목 두줄 초과 제목 두줄 초과 제목 두줄 초과 제목 두줄 초과 제목 두줄 초과 제목 두줄 초과 제목 두줄 초과',
        nickname: '개굴2',
        company: '네이버 Naver',
        job: '프론트엔드 개발자',
        thumbnail: partner_thumbnail3,
        link: 'https://www.coffeechat.kr/designerPortfolioReview/Zelato',
    },    
    {
        id: shortid.generate(),
        tag: 'DTA',
        title: '포트폴리오 리뷰 해드립니다',
        nickname: '데이터나에게',
        company: '아마존 Amazon',
        job: '데이터 다루는 사람',
        thumbnail: partner_thumbnail1,
        link: 'https://www.coffeechat.kr/designerPortfolioReview/Zelato',
    },
    {
        id: shortid.generate(),
        tag: 'DG',
        title: '토스 디자이너가 알려주는 포트폴리오 합격 노하우!',
        nickname: '디그다',
        company: '토스 Toss',
        job: '디자이너',
        thumbnail: partner_thumbnail2,
        link: 'https://www.coffeechat.kr/designerPortfolioReview/Zelato',
    },                
];

export default partnerData;