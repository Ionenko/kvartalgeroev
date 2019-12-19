import React from 'react';
import HeadTop from "../HeadTop";
import {Link, useLocation} from "react-router-dom";
import notFoundImg from '../../img/404.png';

const NotFound = () => {

    let {pathname} = useLocation();

    return (
        <main>
            <HeadTop/>
            <div className="section section_404">
                <div className="container">
                    <div className="section__img wow flipInX" data-wow-delay="300ms">
                        <img src={notFoundImg} alt="Страница не найдена" />
                    </div>
                    <div className="section__info wow zoomIn" data-wow-delay="300ms">
                        <p>
                            Не найденно {pathname}
                            <br/>
                            Неправильно набран адрес или такой страницы на сайте не существует.{" "}
                            <br />
                            Перейдите на {<Link to="/kvartalgeroev">главную страницу</Link>} или воспользуйтесь меню.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default NotFound;