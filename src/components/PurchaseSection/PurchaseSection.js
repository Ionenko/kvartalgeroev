import React from 'react';
import Purchase from "../Purchase";

const PurchaseSection = () => {
    const items = [
        {
            id: 1,
            title: 'Ипотека',
            img: './img/purchase-1.jpg'
        },
        {
            id: 2,
            title: 'Рассрочка',
            img: './img/purchase-2.jpg'
        },
        {
            id: 3,
            title: 'Материнский капитал',
            img: './img/purchase-3.jpg'
        },
        {
            id: 4,
            title: 'Взаимозачёт жилья',
            img: './img/purchase-4.jpg'
        },
    ];
    return (
        <div className="section section_lg-offsetBottom">
            <div
                className="section__icon section__icon_left section__icon_sofa wow bounceIn"
                data-wow-delay="800ms"
            />
            <div className="container">
                <Purchase items={items}/>
            </div>
        </div>
    );
};

export default PurchaseSection;