import React from 'react';
import Stock from "../Stock";


const StockSection = () => {

    const items = [
        {
            id: 1,
            title: 'При 100% оплате отделка в подарок!',
            desc: 'Акция продлится с 21 февраля 2019 по 1 апреля 2019',
            img: './img/stock-1.jpg',
            color: 'blue'
        },
        {
            id: 2,
            title: 'При 200% оплате отделка в подарок!',
            desc: 'Акция продлится с 22 февраля 2019 по 1 апреля 2019',
            img: './img/stock-2.jpg',
            color: 'green'
        },
        {
            id: 3,
            title: 'При 300% оплате отделка в подарок!',
            desc: 'Акция продлится с 23 февраля 2019 по 1 апреля 2019',
            img: './img/stock-3.jpg',
            color: 'pink',
        },
        {
            id: 4,
            title: 'При 400% оплате отделка в подарок!',
            desc: 'Акция продлится с 24 февраля 2019 по 1 апреля 2019',
            img: './img/stock-2.jpg',
            color: 'blue'
        },
        {
            id: 5,
            title: 'При 400% оплате отделка в подарок!',
            desc: 'Акция продлится с 25 февраля 2019 по 1 апреля 2019',
            img: './img/stock-2.jpg'
        }
    ];

    return (
        <div className="section">
            <div className="container">
                <div className="title">
                    <h3>Акции</h3>
                </div>
                <Stock items={items}/>
            </div>
        </div>
    );
};

export default StockSection;