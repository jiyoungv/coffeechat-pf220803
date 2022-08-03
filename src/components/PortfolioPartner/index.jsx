import { useState, useCallback } from 'react';
import { Inners } from '../../styles/Common';
import PortfolioPartners from './Style';
import partnerData from '../../tempData/partnerData';
import { partnerTagToKorean } from '../../utils/func';

function PortfolioPartner() {
    const [tag, setTag] = useState('ALL');
    const onClickTab = useCallback((e) => {
        setTag(e.taget.value);
    }, []);

    return (
        <PortfolioPartners>
            <article className='partner-tab'>
                <Inners>
                    <ul>
                        <li className='active'>
                            <button type='button' onCLick={onClickTab} value='ALL'>전체보기</button>
                        </li>
                        <li>
                            <button type='button' onCLick={onClickTab} value='DG'>디자인</button>
                        </li>
                        <li>
                            <button type='button' onCLick={onClickTab} value='PM'>서비스기획</button>
                        </li>
                        <li>
                            <button type='button' onCLick={onClickTab} value='MKT'>마케팅</button>
                        </li>
                        <li>
                            <button type='button' onCLick={onClickTab} value='DTA'>데이터/AI</button>
                        </li>
                        <li>
                            <button type='button' onCLick={onClickTab} value='DEV'>개발</button>
                        </li>                                                                                                                        
                    </ul>
                </Inners>
            </article>
            <article className='partner-list'>
                <Inners>
                    <ul>
                        {partnerData.map((v, i) => (
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
                                            <p>{v.jon}</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </Inners>
            </article>
        </PortfolioPartners>
    );
}

export default PortfolioPartner;