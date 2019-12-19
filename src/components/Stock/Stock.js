import React from 'react';
import './Stock.scss';
import StockItem from "../StockItem";
import Slider from 'react-slick';

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`slick-arrow_sm ${className}`}
            style={{ ...style}}
            onClick={onClick}
        >
            <span className="icon-chevron-right"/>
        </div>
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`slick-arrow_sm ${className}`}
            style={{ ...style}}
            onClick={onClick}
        >
            <span className="icon-chevron-left"/>
        </div>
    );
}

const Stock = ({items}) => {

    let settings = {
        className: 'stock-slider slider',
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    };

    return (
        <div className="stock">
            <Slider {...settings}>

                {
                    items.map((item, index) => {
                        return (
                            <StockItem key={item.id} item={item} index={index} />
                        );
                    })
                }

            </Slider>
        </div>
    );
};

export default Stock;