import shortid from 'shortid';
import partner_thumbnail1 from '../assets/images/temp/partner_thumbnail1.png';
import partner_thumbnail2 from '../assets/images/temp/partner_thumbnail2.jpg';

const partnerData = [
    {
        id: shortid.generate(),
        tag: 'PM',
        title: '제목이 한줄 일때',
        nickname: '닉네임',
        company: '회사명',
        job: 'PM',
        thumbnail: partner_thumbnail1,
        link: '/',
    },
    {
        id: shortid.generate(),
        tag: 'MKT',
        title: '제목이 두줄 일때 제목이 두줄 일때 제목이 두줄 일때제목이 두줄 일때',
        nickname: '닉네임',
        company: '회사이름이 한줄 이상 일때 회사이름이 한줄 이상 일때',
        job: '직무명이 한줄 이상 일 때 직무명이 한줄 이상일 때',
        thumbnail: partner_thumbnail2,
        link: '/',
    },
    {
        id: shortid.generate(),
        tag: 'DEV',
        title: '제목이 두줄 초과 일때 제목이 두줄 초과 일때제목이 두줄 초과 일때제목이 두줄 제목이...',
        nickname: '닉네임',
        company: '회사명',
        job: '직무명',
        thumbnail: partner_thumbnail1,
        link: '/',
    },
    {
        id: shortid.generate(),
        tag: 'DTA',
        title: '토스 디자이너가 알려주는 포트폴리오 합격 노하우! 두줄이상 123123123',
        nickname: '닉네임',
        company: '회사명',
        job: '직무명',
        thumbnail: partner_thumbnail2,
        link: '/',
    },
    {
        id: shortid.generate(),
        tag: 'DG',
        title: '제목',
        nickname: '닉네임',
        company: '회사명',
        job: '직무명',
        thumbnail: partner_thumbnail1,
        link: '/',
    },                
];

export default partnerData;