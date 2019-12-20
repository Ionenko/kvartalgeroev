import React from 'react';
import './ApartmentsRow.scss'
import {divideIntToStr} from "../../utils/helpers";
import downloadIcon from '../../img/download.svg';
import {useHistory} from 'react-router-dom';
import PropTypes from "prop-types";
import ApartmentItem from "../ApartmentsItem";
import ApartmentsItemPopover from "../ApartmentsItemPopover";

const ApartmentsRow = (props) => {

    const {
        id,
        area,
        building,
        floor,
        number,
        payment,
        period,
        price,
        rooms_count
    } = props;

    let history = useHistory();

    const handleClick = () => {
        history.push(history.location.pathname.replace(/\/+$/, "") + `/${id}`)
    };

    return (
        <tr role="row"  onClick={handleClick} title={`Квартира № ${number}`}>
            <td className="mobile-hidden">
                <ApartmentsItemPopover {...props}/>
            </td>
            <td className="mobile-hidden">
                <span className="value">{number}</span>
            </td>
            <td>
                <span className="value">{building}</span>
            </td>
            <td>
                <span className="value">{rooms_count}</span>
            </td>
            <td>
                <span className="mobile-hidden">
                    <span className="value">{area}</span> м<sup>2</sup>
                </span>
                <span className="mobile-visible">
                    <span className="value">{area}</span>
                </span>
            </td>
            <td>
                <span className="value">{floor}</span>
            </td>
            <td>
                <span className="value mobile-hidden">{divideIntToStr(price)}</span>
                <span className="mobile-visible">{divideIntToStr(price)}</span>
            </td>
            <td>
                <span className="mobile-hidden">
                    ≈ <span className="value">{divideIntToStr(payment)}</span>
                </span>
                <span  className="mobile-visible">
                    от <span className="value">{divideIntToStr(payment)}</span>
                </span>
            </td>
            <td className="mobile-hidden">
                <span className="value">{period}</span>
            </td>
            <td className="mobile-hidden">
                <a href="./" download="">
                    <img className="icon" src={downloadIcon} alt="filename"/>
                </a>
            </td>
        </tr>
    );
};

ApartmentItem.propTypes = {
    area: PropTypes.string.isRequired,
    floor: PropTypes.number.isRequired,
    building: PropTypes.number.isRequired,
    period: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    payment: PropTypes.number.isRequired,
    rooms_count: PropTypes.number.isRequired,
    number: PropTypes.number.isRequired
};

export default ApartmentsRow;