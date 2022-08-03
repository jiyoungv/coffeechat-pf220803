import { useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Headers } from '../../styles/Common';

function CardViewHeader() {
    // 뒤로가기
    const navigate = useNavigate();
    const onClickBack = useCallback(() => {
        navigate(-1);
    }, [navigate]);  

    return (
        <Headers>
            <button type="button" onClick={onClickBack} className='left-button back-button'>
                <span className='left-button-text'>뒤로 가기</span>
            </button>
            <div className='right-button'>
                <Link to='/card/change'>등록 카드 변경</Link>
            </div>
        </Headers>        
    );
}

export default CardViewHeader;