import React from 'react';
import './Sorting.scss';

const Sorting = (props) => {

    return (
        <div className="sorting">
            <div className="sorting__row">
                <div className="sorting__title">
                    <span>Сортировать</span>
                </div>
                <div className="sorting__list">
                    {
                        props.children
                    }
                </div>
            </div>
        </div>
    );
};

export default Sorting;