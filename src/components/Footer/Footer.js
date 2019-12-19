import React from 'react';
import './Footer.scss';
import logoIcon from '../../img/logoSlide.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__row">
                    <div className="footer__copyright">
                        <div className="footer__logo">
                            <a className="logo" href="./">
                                <img src={logoIcon} alt="logo"/>
                            </a>
                        </div>
                        <span>2019 © Жилой комплекс “Героев”</span>
                    </div>
                    <div className="footer__details">
                        <div className="footer__details__item">
                            <a href="./">Политика конфиденциальности</a>
                            <br/>
                            <a href="./">Соглашение на обработку персональных данных</a>
                        </div>
                        <div className="footer__details__item">
                            <p>Другие проекты в Балашихе</p>
                            <ul>
                                <li>
                                    <a href="./" target="_blank">
                                        ЖК «Столичный»
                                    </a>
                                </li>
                                <li>
                                    <a href="./" target="_blank">
                                        ЖК «Династия»
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__developer">
                        <span>
                            Сделано в
                            <a href="./" target="_blank">
                                A M I O
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;