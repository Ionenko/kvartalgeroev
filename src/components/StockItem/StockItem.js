import React, {useRef, useEffect} from 'react';
import {Link} from "react-router-dom";
import classNames from 'classnames';
import gsap from 'gsap';

const StockItem = (props) => {

    const {index, item: {title, desc, img, color}, ...sliderProps} = props;
    let infoRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(infoRef,{
            scale: 0.5,
            translateY: 100,
            ease: "elastic(1, 0.3)",
            opacity: 0
        },{
            duration: 1,
            delay: 1,
            scale: 1,
            translateY: 0,
            opacity: 1,
            ease: "elastic(1, 0.3)",
        });
    }, []);

    return (
        <div className='stock__item' {...sliderProps}>
            <Link to='/stock/single/'>
                <div className="stock__img">
                    <div
                        className="img"
                        style={{ backgroundImage: `url('${img}')` }}
                    />
                </div>
                <div
                    ref={(el) => infoRef = el} className={classNames('stock__info wow zoomIn', { [`stock__info_${color}`] : !!color })}
                >
                    <div className="stock__title">
                        <h5>{title}</h5>
                    </div>
                    <div className="stock__text">
                        <p>{desc}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default StockItem;