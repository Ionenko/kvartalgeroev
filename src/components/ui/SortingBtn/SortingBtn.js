import React from 'react';
import classNames from 'classnames'

const SortingBtn = (props) => {
    const { type, direction, active, handleSort} = props;

    return (
        <span onClick={ () => handleSort(type) } className={classNames('sorting__link', {[`${direction}`] : active})}>
            {
                props.children
            }
            <span className="sorting__link__arrows" />
        </span>
    );
};

export default SortingBtn;
