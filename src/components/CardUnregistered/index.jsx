import { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import CardUnregistereds from './Style';
import card_plus from '../../assets/images/card_plus.svg';

function CardUnregistered({ title, title2, text }) {
    const navigate = useNavigate();

    const onClickCard = useCallback(() => {
        navigate('/card/register');
    }, [navigate]);

    return (
        <CardUnregistereds onClick={onClickCard}>
            <div className='card-inner'>
                <div className='card-title'>
                    <h6><b>{title}</b></h6>
                    {title2 && <h6>{title2}</h6>}
                </div>
                <div className='card-icon'>
                    <figure>
                        <img src={card_plus} alt='+' />
                    </figure>
                </div>
                {text && 
                    <div className='card-text'>
                        <p>{text}</p>
                    </div>
                }
            </div>
        </CardUnregistereds>
    );
}

CardUnregistered.propTypes = {
    title: PropTypes.string,
    title2: PropTypes.string,
    text: PropTypes.string,
};

export default CardUnregistered;