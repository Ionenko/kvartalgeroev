import React from 'react';
import './Purchase.scss';
import PurchaseItem from "../PurchaseItem";

const Purchase = ({items}) => {

    return (
        <div className="purchase">
            <div className="title">
                <h3>Различные способы покупки</h3>
            </div>
            <div className="purchase__row">
                {
                    items.map((item) => {

                        return (
                            <PurchaseItem key={item.id} purchase={item}/>
                        );
                    })
                }
            </div>
            <div className="purchase__actions">
                <a className="link link_default" href="./">
                    смотреть все условия
                </a>
            </div>
        </div>
    );
};

export default Purchase;