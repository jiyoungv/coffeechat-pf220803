import { useState, useCallback } from 'react';
import { Inners } from '../../styles/Common';
import PortfolioPartners from './Style';
import partnerData from '../../tempData/partnerData';
import { partnerTagToKorean } from '../../utils/func';

function PortfolioPartner() {
    // 탭 리스트 (순서대로)
    const partnerTabList = [
        { value: 'ALL', text: '전체보기' },
        { value: 'DG', text: '디자인' },
        { value: 'PM', text: '서비스기획' },
        { value: 'MKT', text: '마케팅' },
        { value: 'DTA', text: '데이터/AI' },
        { value: 'DEV', text: '개발' },
    ];

    // 탭 클릭시 index, tag 체크
    const [tabIndex, setTabIndex] = useState(0);
    const [tabTag, setTabTag] = useState('ALL');
    const onClickTab = useCallback((index) => (e) => {
        setTabIndex(index);
        setTabTag(e.target.value);
    }, []);

    // 탭 선택에 따라 달라지는 리스트
    const partnerList = partnerData.filter(v => {
        if (tabTag === 'ALL') { // 전체보기 O
            return true;
        } else { // 전체보기 X
            return tabTag === v.tag;
        }
    }).map((v, i) => (
        <li key={v.id} className={`type-${v.tag.toLowerCase()}`}>
            <a href={v.link} title={v.nickname + '파트너 정보 바로가기'}>
                <div className='partner-list-tag'>
                    <em>{v.tag}</em>
                    <p>{partnerTagToKorean(v.tag)}</p>
                </div>
                <div className='partner-list-title'>
                    <h2>{v.title}</h2>
                </div>
                <div className='partner-list-profile'>
                    <figure className='partner-list-thumbnail'>
                        <img src={v.thumbnail} alt={v.nickname + '썸네일'} />
                    </figure>
                    <div className='partner-list-career'>
                        <h6>{v.nickname}</h6>
                        <p>{v.company}</p>
                        <p>{v.job}</p>
                    </div>
                </div>
            </a>
        </li>
    ));

    return (
        <PortfolioPartners>
            <article className='partner-tab'>
                <Inners>
                    <ul>
                        {partnerTabList.map((v, i) => (
                            <li key={v.value} className={tabIndex === i ? 'active' : null}>
                                <button type='button' onClick={onClickTab(i)} value={v.value}>{v.text}</button>
                            </li>
                        ))}                                                                                                                      
                    </ul>
                </Inners>
            </article>
            <article className='partner-list'>
                <Inners>
                    <ul>
                        {partnerList}
                    </ul>
                </Inners>
            </article>
        </PortfolioPartners>
    );
}

export default PortfolioPartner;