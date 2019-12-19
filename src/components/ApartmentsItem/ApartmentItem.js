import React, {useEffect} from 'react';
import './ApartmentsItem.scss';
import {Link, useHistory} from "react-router-dom";
import {divideIntToStr} from "../../utils/helpers";
import PropTypes from 'prop-types';

const ApartmentItem = (props) => {

    const {
        id,
        planImg,
        area,
        floor,
        building,
        period,
        price,
        payment
    } = props;

    useEffect(()=>{

    });

    let {location} = useHistory();

    return (
        <div
            className="apartments__item"
        >
            <Link to={location.pathname.replace(/\/+$/, "") + `/${id}`}>
                <div className="apartments__item__title">
                    <p>
                        1 комн. {area} м<sup>2</sup>
                    </p>
                </div>
                <div className="apartments__item__img">
                    <img src={planImg} alt="" />
                </div>
                <div className="apartments__features">
                    <div className="apartments__features__item">
                        <div className="apartments__features__label">
                            <span>Этаж</span>
                        </div>
                        <div className="apartments__features__value">
                            <span>{floor}</span>
                        </div>
                    </div>
                    <div className="apartments__features__item">
                        <div className="apartments__features__label">
                            <span>Корпус</span>
                        </div>
                        <div className="apartments__features__value">
                            <span>{building}</span>
                        </div>
                    </div>
                    <div className="apartments__features__item">
                        <div className="apartments__features__label">
                            <span>Срок сдачи</span>
                        </div>
                        <div className="apartments__features__value">
                            <span>{period}</span>
                        </div>
                    </div>
                </div>
                <div className="apartments__item__cost">
                    <span>
                      Стоимость <strong>{divideIntToStr(price)} </strong>
                      <strong>₽</strong>
                    </span>
                    <br />
                    <span>≈ {divideIntToStr(payment)} ₽/месяц</span>
                </div>
                <div className="apartments__item__actions">
                    <span className="btn btn_sm">
                      <span>подробнее</span>
                    </span>
                </div>
            </Link>

        </div>
    );
};

ApartmentItem.propTypes = {
    planImg: PropTypes.string,
    area: PropTypes.string.isRequired,
    floor: PropTypes.number.isRequired,
    building: PropTypes.number.isRequired,
    period: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    payment: PropTypes.number.isRequired,
};

export default ApartmentItem;