import React from 'react';
import './Breadcrumbs.scss';
import withBreadcrumbs from "react-router-breadcrumbs-hoc";
import {Link} from "react-router-dom";

const routes = [
    { path: '/apartments', breadcrumb: 'Квартиры' },
    { path: '/apartments/params', breadcrumb: 'Выбор по параметрам' },
    { path: '/apartments/params/:id', breadcrumb: 'Квартира №' },
    { path: '/', breadcrumb: 'Главная' },
];

const Breadcrumbs = ({breadcrumbs}) => {
    // console.log(breadcrumbs);
    return (
        <div className="breadcrumbs">
            <div className="container">
                <ul className="breadcrumbs__list">
                    {
                        breadcrumbs.map(({match, breadcrumb}, index) => {
                            // console.log(breadcrumb);
                            if(index === breadcrumbs.length - 1){
                                return (
                                    <li className="breadcrumbs__item" key={match.url}>
                                        <span className="breadcrumbs__element">
                                            {breadcrumb}
                                        </span>
                                    </li>
                                )
                            } else {
                                return (
                                    <li className="breadcrumbs__item" key={match.url}>
                                        <Link className="breadcrumbs__element" to={match.url}>
                                            {breadcrumb}
                                        </Link>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default withBreadcrumbs(routes)(Breadcrumbs);