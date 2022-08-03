import { useCallback } from 'react'
import { useNavigate  } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Headers } from '../../styles/Common';

function PageHeader({ title, type = null }) {
    const navigate = useNavigate();
    const onClickBack = useCallback(() => {
        navigate(-1);
    }, [navigate]);

    const pageTitle = title 
        ? (
            <div className='header-title'>
                <p>{title}</p>
            </div>
        )
        : '';

    return (
        <Headers type={type}>
            {pageTitle}
            <button type="button" onClick={onClickBack} className='left-button back-button'>
                <span className='left-button-text'>뒤로 가기</span>
            </button>
        </Headers>
    );
}

PageHeader.propTypes = {
    title: PropTypes.string,
    type: PropTypes.number,
};

export default PageHeader;