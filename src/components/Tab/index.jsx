import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from './Style';

function Tab({ handler, labels, defaultIndex = 0, tabType = 1 }) {
    const [index, setIndex] = useState(defaultIndex);
    const onClickTab = useCallback((index) => () => {
        setIndex(index);
        handler(index);
    }, [handler]);

    return (
        <Tabs tabIndex={index} tabLength={labels.length} tabType={tabType}>
            {labels.map((v, i) => (
                <li key={i} className={index === i ? 'active' : ''}>
                    <button type='button' onClick={onClickTab(i)}>{v}</button>
                </li>
            ))}                  
        </Tabs>        
    );
}

Tab.propTypes = {
    labels: PropTypes.array.isRequired,
    handler: PropTypes.func.isRequired,
    defaultIndex: PropTypes.number,
    tabType: PropTypes.number,
};

export default Tab;