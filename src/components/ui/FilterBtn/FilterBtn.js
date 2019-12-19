import React from 'react';
import classNames from 'classnames';

const FilterBtn = (props) => {
    const {active, handleClick, label} = props;

    return (
        <button
            className={classNames('filters__element', {'filters__element_active' : active})}
            onClick={handleClick}
            type="button"
        >
            {label}
        </button>
    );
};

export default FilterBtn;