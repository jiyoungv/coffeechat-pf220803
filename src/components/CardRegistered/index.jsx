import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import CardRegistereds from './Style';
import IconCheck from '../IconCheck';
import Modal from '../Modal';

function CardRegistered({ cardInfo, canDelete = true }) {
    const navigate = useNavigate();

    // 삭제 모달
    const [openModal, setOpenModal] = useState(false);
    const onOpenModal = useCallback(() => {
        setOpenModal(true);
    }, []);
    const onCloseModal = useCallback(() => {
        setOpenModal(false);
    }, []);

    // 카드 삭제
    const onClickDelete = useCallback(() => {
        navigate('/card/view');
    }, [navigate]);

    return (
        <CardRegistereds>
            <div className='card-top'>
                <h6>{cardInfo.company} 카드</h6>
                <IconCheck checked={true} />
            </div>
            <div className='card-bottom'>
                <div className='card-bottom-left'>
                    <ul className='card-number'>
                        <li>{cardInfo.number[0]}</li>
                        <li>****</li>
                        <li>****</li>
                        <li>{cardInfo.number[3]}</li>
                    </ul>
                    <ul className='card-credit'>
                        <li>{cardInfo.credit}</li>
                        <li>{cardInfo.issuer}</li>
                    </ul>
                </div>
                {canDelete && <button type='button' className='card-delete' onClick={onOpenModal}>삭제</button>}
                {openModal &&
                    <Modal title={'카드를 삭제 할까요?'}>
                        <button type='button' onClick={onCloseModal}>아니오</button>
                        <button type='button' onClick={onClickDelete}>네</button>
                    </Modal>
                }
            </div>
        </CardRegistereds>
    );
}

CardRegistered.propTypes = {
    cardInfo: PropTypes.object,
    canDelete: PropTypes.bool,
};

export default CardRegistered;