import React, {useRef} from 'react';
import {Link} from "react-router-dom";
import './Menu.scss';
import {Transition} from "react-transition-group";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import logoIcon from '../../img/logo.svg';
import phoneIcon from '../../img/phone.svg';
import panoramaIcon from '../../img/panorama.svg';
import gsap from "gsap";

const Menu = ({toggleMenu, visibleMenu}) => {

    let menuRef = useRef(null);

    const tl = gsap.timeline();

    const animateMenu = (node, done, visible) => {
        let menuContent = menuRef.querySelector('.menu__content');
        let overlayFirst = menuRef.querySelectorAll('.menu__overlay_1');
        let overlaySecond = menuRef.querySelectorAll('.menu__overlay_2');

        if(visible){
            tl
                .set(menuRef, {visibility: 'visible'})
                .to(menuRef, {duration: 1.2, ease: "power2.inOut", y: "0%"})
                .to(overlayFirst, {duration: 1.2, ease: "power2.inOut", y: "100%", delay: -0.6})
                .to(overlaySecond, {duration: 1.2, ease: "power2.inOut", y: "100%", delay: -1})
                .fromTo(menuContent, {y: '40px', opacity: 0}, {y: '0%', opacity: 1, duration: .3})
        } else {
            tl
                .fromTo(menuContent, {y: '0%', opacity: 1}, {y: '40px', opacity: 0, duration: .3})
                .to(overlaySecond, {duration: .6, ease: "power2.inOut", y: "-100%"})
                .to(overlayFirst, {duration: .6, ease: "power2.inOut", y: "-100%", delay: -.4})
                .to(menuRef, {duration: .3,  ease: "power2.inOut", y: "-100%"})
                .set(menuRef, {visibility: 'hidden'})
            ;
        }
    };

    return (
        <Transition
            timeout={1600}
            mountOnEnter
            unmountOnExit
            in={visibleMenu}
            addEndListener={(node, done) => {
                animateMenu(node, done, visibleMenu);
            }}
        >
            <ClickAwayListener onClickAway={toggleMenu}>
                <div className="menu" ref={menu => menuRef = menu}>
                    <div className="menu__overlays">
                        <div className="menu__overlay menu__overlay_1"/>
                        <div className="menu__overlay menu__overlay_2"/>
                    </div>
                    <div className="menu__close" onClick={toggleMenu}>
                        <span className="icon-times" />
                    </div>
                    <div className="menu__container">
                        <div className="container">
                            <div className="menu__content">
                                <div className="menu__logo">
                                    <Link className="logo" to="/">
                                        <img src={logoIcon} alt="logo" />
                                    </Link>
                                </div>
                                <nav className="menu__nav">
                                    <div className="menu__item">
                                        <div className="menu__head">
                                            <div className="menu__head__item menu__toggle">
                                                <Link to="/about">О проекте</Link>
                                            </div>
                                        </div>
                                        <div className="menu__links">
                                            <div className="menu__links__item">
                                                <Link to="/about/infra">Инфраструктура</Link>
                                            </div>
                                            <div className="menu__links__item">
                                                <Link to="/about/gallery">Галерея</Link>
                                            </div>
                                            <div className="menu__links__item">
                                                <Link to="/about/aerial">Аэрофотосъемка</Link>
                                            </div>
                                            <div className="menu__links__item">
                                                <Link to="/about/video">Видео</Link>
                                            </div>
                                            <div className="menu__links__item">
                                                <Link to="/about/building">Динамика строительства</Link>
                                            </div>
                                            <div className="menu__links__item">
                                                <Link to="/about/docs">Документы</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="menu__item">
                                        <div className="menu__head">
                                            <div className="menu__head__item menu__toggle">
                                                <Link to="/apartments/params">Выбор квартиры</Link>
                                            </div>
                                        </div>
                                        <div className="menu__links">
                                            <div className="menu__links__item">
                                                <Link to="/">Генплан</Link>
                                            </div>
                                            <div className="menu__links__item">
                                                <Link to="/apartments">Список свободных квартир</Link>
                                            </div>
                                            <div className="menu__links__item">
                                                <Link to="/">Отделка</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="menu__item">
                                        <div className="menu__head">
                                            <div className="menu__head__item menu__toggle">
                                                <Link to="/buy/mortgage/">Как купить</Link>
                                            </div>
                                        </div>
                                        <div className="menu__links">
                                            <div className="menu__links__item">
                                                <Link to="/buy/mortgage/">Ипотека</Link>
                                            </div>
                                            <div className="menu__links__item">
                                                <Link to="/buy/military/">Военная ипотека</Link>
                                            </div>
                                            <div className="menu__links__item">
                                                <Link to="/buy/family/">Семейная ипотека</Link>
                                            </div>
                                            <div className="menu__links__item">
                                                <Link to="/buy/maternal/">Материнский капитал</Link>
                                            </div>
                                            <div className="menu__links__item">
                                                <Link to="/buy/installment/">Рассрочка</Link>
                                            </div>
                                            <div className="menu__links__item">
                                                <Link to="/buy/netting/">Взаимозачет жилья</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="menu__item">
                                        <div className="menu__head">
                                            <div className="menu__head__item">
                                                <Link to="/stock">Акции</Link>
                                            </div>
                                            <div className="menu__head__item">
                                                <Link to="/news">Новости</Link>
                                            </div>
                                            <div className="menu__head__item">
                                                <Link to="/contacts">Контакты</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="menu__item">
                                        <div className="links-list">
                                            <div className="links-list__item">
                                                <a className="link" href="tel:+7(495)737-07-77">
                                                    <span className="link__text">+7 (495) 737-07-77</span>
                                                </a>
                                            </div>
                                            <div className="links-list__item links-list__item_callback">
                                                <a className="link open-popup" href="#callback-popup">
                                            <span className="link__icon">
                                                <img src={phoneIcon} alt="phone"/>
                                            </span>
                                                    <span className="link__text">Обратный звонок</span>
                                                </a>
                                            </div>
                                            <div className="links-list__item">
                                                <a className="link open-popup" href="#panorama-popup">
                                            <span className="link__icon">
                                                <img src={panoramaIcon} alt="" />
                                            </span>
                                                    <span className="link__text">Панорама</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </ClickAwayListener>

        </Transition>
    );
};

export default Menu;