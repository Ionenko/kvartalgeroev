import React from 'react';
import './Header.scss';
import logoIcon from '../../img/logo.svg';
import phoneIcon from '../../img/phone.svg';
import panoramaIcon from '../../img/panorama.svg';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import {Link} from "react-router-dom";

const Header = ({isScrolled, isSmall, toggleMenu}) => {
    return (
        <header className={
            classNames(
                'header',
                {'header_sm': isSmall},
                {'header_scrolled': isScrolled > 0}
            )
        }>
            <div className="header-container">
                <div className="container">
                    <div className="header__row">
                        <div className="header__logo">
                            <Link className="logo" to="/">
                                <img src={logoIcon} alt="logo"/>
                            </Link>
                        </div>
                        <div className="header__content">
                            <div className="links-list">
                                <div className="links-list__item">
                                    <a className="link" href="tel:+7(495)737-07-77">
                                        <span className="link__icon">
                                          <img src={phoneIcon} alt="phone"/>
                                        </span>
                                        <span className="link__text">+7 (495) 737-07-77</span>
                                    </a>
                                </div>
                                <div className="links-list__item">
                                    <a className="link open-popup" href="#panorama-popup">
                                        <span className="link__icon">
                                          <img src={panoramaIcon} alt="panorama"/>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="header__hamburger">
                                <button onClick={toggleMenu}
                                    className="hamburger hamburger--collapse hamburger--accessible js-hamburger"
                                    type="button"
                                    aria-label="Menu"
                                    aria-controls="navigation"
                                >
                                    <span className="hamburger-label">меню</span>
                                    <span className="hamburger-box">
                                        <span className="hamburger-inner"/>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

Header.propTypes = {
    isScrolled: PropTypes.number,
    isSmall: PropTypes.bool
};

export default Header;