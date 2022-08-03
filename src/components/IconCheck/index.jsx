import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { color } from '../../styles/Variable';

function IconCheck({ checked }) {
    const { midnight200, brand500 } = color;
    const uncheckedColor = midnight200;
    const checkedColor = brand500;

    const [strokeColor, setStrokeColor] = useState(uncheckedColor);
    
    useEffect(() => {
        if (checked) {
            setStrokeColor(checkedColor);
        }

        return () => {
            setStrokeColor(uncheckedColor);
        }
    }, [checked, setStrokeColor, checkedColor, uncheckedColor]);

    return (
        <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 1.5L6 12.5L1 7.5" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

IconCheck.propTypes = {
    checked: PropTypes.bool,
};

export default IconCheck;