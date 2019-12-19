import React from 'react';
import './Head.scss';
import Breadcrumbs from "../Breadcrumbs";


const HeadTop = () => {
    return (
        <div className="head">
            <div className="head__content">
                <div className="container">
                    <div className="head__title">
                        <div className="head__title__section">
                            <h3>Выбрать по параметрам</h3>
                        </div>
                    </div>
                </div>
                <Breadcrumbs/>
                <div className="head__actions head__actions_outside">
                    <div className="container">
                        <a className="btn btn_pink" href="./">
                            <span>выбрать на генплане</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeadTop;