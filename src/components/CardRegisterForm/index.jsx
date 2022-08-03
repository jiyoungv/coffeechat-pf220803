import { useState, useCallback, useEffect, useRef } from 'react';
import { InputTexts, InputConnectWraps, InputConnects, InputConnectLines, FloatButtons, Buttons } from '../../styles/Common';
import CardRegisterForms from './Style';
import Tab from '../Tab';

function CardRegisterForm() {
    const card1El = useRef(null);
    const card2El = useRef(null);
    const card3El = useRef(null);
    const card4El = useRef(null);
    const expire1El = useRef(null);
    const expire2El = useRef(null);
    const birthEl = useRef(null);
    
    // 탭
    const issuerDefaultIndex = 0;
    const [issuerTab, setIssuerTab] = useState(issuerDefaultIndex);
    const onChangeIssuerTab = useCallback((index) => {
        setIssuerTab(index);
    }, []);

    // 카드번호 focus & blur 체크
    const [card1Focus, setCard1Focus] = useState(false);
    const onFocusCard1 = useCallback(() => {
        setCard1Focus(true);
    }, []);
    const onBlurCard1 = useCallback(() => {
        setCard1Focus(false);
    }, []);
    const [card2Focus, setCard2Focus] = useState(false);
    const onFocusCard2 = useCallback(() => {
        setCard2Focus(true);
    }, []);
    const onBlurCard2 = useCallback(() => {
        setCard2Focus(false);
    }, []);
    const [card3Focus, setCard3Focus] = useState(false);
    const onFocusCard3 = useCallback(() => {
        setCard3Focus(true);
    }, []);
    const onBlurCard3 = useCallback(() => {
        setCard3Focus(false);
    }, []);
    const [card4Focus, setCard4Focus] = useState(false);
    const onFocusCard4 = useCallback(() => {
        setCard4Focus(true);
    }, []);
    const onBlurCard4 = useCallback(() => {
        setCard4Focus(false);
    }, []);
    const [cardFocus, setCardFocus] = useState(false);
    useEffect(() => {
        if (card1Focus || card2Focus || card3Focus || card4Focus) {
            setCardFocus(true);
        }

        return () => {
            setCardFocus(false);
        }
    }, [card1Focus, card2Focus, card3Focus, card4Focus]);

    // 카드번호1
    const [card1, setCard1] = useState('');
    const onChangeCard1 = useCallback((e) => {
        if (e.target.value.length > 4) return;
        if (e.target.value.length === 4) {
            card2El.current.focus();
        }

        setCard1(e.target.value);
    }, []);
    const onKeyUpCard1 = useCallback((e) => {
        if (e.code === 'Enter') {
            console.log('Enter');
            card2El.current.focus();
        }
    }, []);

    // 카드번호2
    const [card2, setCard2] = useState('');
    const onChangeCard2 = useCallback((e) => {
        if (e.target.value.length > 4) return;
        if (e.target.value.length === 4) {
            card3El.current.focus();
        }

        setCard2(e.target.value);
    }, []);

    // 카드번호3
    const [card3, setCard3] = useState('');
    const onChangeCard3 = useCallback((e) => {
        if (e.target.value.length > 4) return;
        if (e.target.value.length === 4) {
            card4El.current.focus();
        }
        
        setCard3(e.target.value);
    }, []);

    // 카드번호4
    const [card4, setCard4] = useState('');
    const onChangeCard4 = useCallback((e) => {
        if (e.target.value.length > 4) return;
        if (e.target.value.length === 4) {
            expire1El.current.focus();
        }

        setCard4(e.target.value);
    }, []);

    // 유효기간1
    const [expire1, setExpire1] = useState('');
    const onChangeExpire1 = useCallback((e) => {
        if (e.target.value.length > 2) return;
        if (e.target.value.length === 2) {
            expire2El.current.focus();
        }

        setExpire1(e.target.value);
    }, []);

    // 유효기간2
    const [expire2, setExpire2] = useState('');
    const onChangeExpire2 = useCallback((e) => {
        if (e.target.value.length > 2) return;
        if (e.target.value.length === 2) {
            birthEl.current.focus();
        }

        setExpire2(e.target.value);
    }, []);

    // 생년월일
    const [birth, setBirth] = useState('');
    const onChangeBirth = useCallback((e) => {
        if (e.target.value.length > 6) return;
        if (e.target.value.length === 6) {
            birthEl.current.blur();
        }

        setBirth(e.target.value);
    }, []);    

    // 사업자번호

    // 등록하기 버튼 활성화 여부
    const [canSubmit, setCanSubmit] = useState(false);
    useEffect(() => {
        setCanSubmit(true);

        return () => {
            setCanSubmit(false);
        }
    }, []);

    // 등록하기
    const onSubmitRequest = useCallback((e) => {
        e.preventDefault();

    }, []);

    return (
        <CardRegisterForms onSubmit={onSubmitRequest}>
            <Tab labels={['일반 카드', '법인 카드']} defaultIndex={issuerDefaultIndex} handler={onChangeIssuerTab} />
            <article className='form-field form-card'>
                <div className='form-title'>
                    <p><b>카드번호</b></p>
                </div>
                <InputConnectWraps className={cardFocus && 'focus'}>
                    <InputConnects type='number' name='card1' value={card1} onChange={onChangeCard1} onFocus={onFocusCard1} onBlur={onBlurCard1} onKeyUp={onKeyUpCard1} ref={card1El} placeholder='0000' width='35' autoFocus />
                    <InputConnectLines>-</InputConnectLines>
                    <InputConnects type='number' name='card2' value={card2} onChange={onChangeCard2} onFocus={onFocusCard2} onBlur={onBlurCard2} ref={card2El} placeholder='0000' width='35' />
                    <InputConnectLines>-</InputConnectLines>
                    <InputConnects type='number' name='card3' value={card3} onChange={onChangeCard3} onFocus={onFocusCard3} onBlur={onBlurCard3} ref={card3El} placeholder='0000' width='35' />
                    <InputConnectLines>-</InputConnectLines>
                    <InputConnects type='number' name='card4' value={card4} onChange={onChangeCard4} onFocus={onFocusCard4} onBlur={onBlurCard4} ref={card4El} placeholder='0000' width='35' />
                </InputConnectWraps>
            </article>
            <article className='form-field form-expire'>
                <div className='form-title'>
                    <p><b>유효기간</b></p>
                </div>
                <div className='form-expire-input'>
                    <InputTexts type='number' name='expire1' value={expire1} onChange={onChangeExpire1} ref={expire1El} placeholder='MM' />
                    <InputTexts type='number' name='expire2' value={expire2} onChange={onChangeExpire2} ref={expire2El} placeholder='YY' />
                </div>
            </article>
            <article className='form-field form-birth'>
                <div className='form-title'>
                    <p><b>생년월일 (주민등록번호 앞 6자리)</b></p>
                </div>
                <div className='form-birth-input'>
                    <InputTexts type='number' name='birth' value={birth} onChange={onChangeBirth} ref={birthEl} placeholder='900101' />
                </div>
            </article>
            {/* <article className='form-field form-business'>
                <div className='form-title'>
                    <p><b>사업자 등록 번호 (10자리)</b></p>
                </div>
                <div className='form-business-input'>
                    사업자 등록 번호
                </div>
            </article> */}
            <FloatButtons floatType='fixed'>
                <Buttons type='submit' disabled={!canSubmit}>카드 등록하기</Buttons>
            </FloatButtons>
        </CardRegisterForms>
    );
}

export default CardRegisterForm;