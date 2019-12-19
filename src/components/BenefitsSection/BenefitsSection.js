import React from 'react';
import Benefits from "../Benefits";

const BenefitsSection = () => {
    const items = [
        {
            id: 1,
            img: './img/1.svg',
            text: `Продуманные <br /> планировочные решения`,
        },
        {
            id: 2,
            img: './img/2.svg',
            text: `От уютных студий <br> до квартир евро-формата`,
        },
        {
            id: 3,
            img: './img/3.svg',
            text: `C отделкой`,
        },
        {
            id: 4,
            img: './img/4.svg',
            text: `Рядом  <br> Ольгинский лесопарк`,
        },
        {
            id: 5,
            img: './img/5.svg',
            text: `Паркинг`,
        }
    ];

    return (
        <div className="section">
            <div className="container">
                <Benefits items={items}/>
            </div>
        </div>
    );
};

export default BenefitsSection;