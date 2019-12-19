import React from 'react';
import './ApartmentList.scss';
import ApartmentItem from "../ApartmentsItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const ApartmentsList = (props) => {
    return (
        <TransitionGroup className="apartments__list">
            {
                props.items.map((apartment) => {
                    return (
                       <CSSTransition
                           timeout={600}
                           unmountOnExit
                           classNames="apartments__item"
                           key={apartment.id}>
                           <ApartmentItem {...apartment}/>
                       </CSSTransition>
                    )
                })
            }
        </TransitionGroup>
    );
};


export default ApartmentsList;