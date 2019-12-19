import React from 'react';

const PurchaseItem = ({purchase}) => {

    const {img, title} = purchase;

    return (
        <a
            className="purchase__item"
            href="./"
            data-wow-delay="200ms"
        >
            <div className="purchase__item__img">
                <div
                    className="img"
                    style={{ backgroundImage: `url('${img}')` }}
                />
            </div>
            <div className="purchase__item__name">
                <p>{title}</p>
            </div>
        </a>
    );
};

export default PurchaseItem;