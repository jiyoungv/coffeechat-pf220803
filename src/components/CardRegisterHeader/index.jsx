import { useState, useCallback } from 'react';
import { useNavigate  } from 'react-router-dom';
import { Headers } from '../../styles/Common';
import Modal from '../Modal';

function CardRegisterHeader() {
    // 모달
    const [openModal, setOpenModal] = useState(false);
    const onOpenModal = useCallback(() => {
        setOpenModal(true);
    }, []);
    const onCloseModal = useCallback(() => {
        setOpenModal(false);
    }, []);

    // 뒤로가기
    const navigate = useNavigate();
    const onClickBack = useCallback(() => {
        navigate(-1);
    }, [navigate]);

    return (
        <Headers>
            <button type="button" onClick={onOpenModal} className='left-button back-button'>
                <span className='left-button-text'>뒤로 가기</span>
            </button>
            {openModal && 
                <Modal title={'입력하신 내용이 저장되지 않습니다. 나가시겠습니까?'} text={'커피챗 대화 연장 기능 사용을 위해 카드 등록이 필수입니다.'}>
                    <div class='button-strange1'>
                        <button type='button' className='button-full' onClick={onCloseModal}>등록 화면으로 돌아가기</button>
                    </div>
                    <div className='button-strange2'>
                        <button type='button' onClick={onClickBack}>나가기</button>
                    </div>
                </Modal>
            }
        </Headers>        
    );
}

export default CardRegisterHeader;