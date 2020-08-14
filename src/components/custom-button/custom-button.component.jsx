import React from 'react';

import './custom-button.styles.scss';

const CustmButton = ({children, ...otherProps}) => (
    <button className = 'custom-button' {...otherProps}>
        {children}
    </button>
);


export default CustmButton;


