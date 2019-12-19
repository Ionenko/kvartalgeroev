import React from 'react';
import './Benefits.scss';
import BenefitsItem from "../BenefitsItem";

const Benefits = ({items}) => {
    return (
        <div className="benefits">
            <div className="benefits__row">
                {
                    items.map((item, index) => {
                        return (
                            <BenefitsItem key={index} item={item}/>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Benefits;