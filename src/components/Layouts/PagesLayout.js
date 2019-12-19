import React, {useEffect, useRef} from 'react';
import {Route, Switch} from "react-router-dom";
import Apartments from "../Pages/Apartments";
import NotFound from "../Pages/NotFound";
import Header from "../Header";
import Menu from "../Menu";
import gsap from "gsap";
import Footer from "../Footer";
import Apartment from "../Pages/Apartment";

const PagesLayout = ({isScrolled, toggleMenu, visibleMenu}) => {
    let pageRef = useRef(null);

    const tl = gsap.timeline();

    useEffect(() => {
        tl.to(pageRef, 1.6,{autoAlpha: 1, delay: .6})
    }, );

    return (
        <div style={{opacity: 0}} ref={ page => pageRef = page}>
            <Header toggleMenu={toggleMenu} isScrolled={isScrolled}/>
            <Menu visibleMenu={visibleMenu} toggleMenu={toggleMenu}/>
            <Switch>
                <Route exact path="/apartments/params/:id" >
                    <Apartment visibleMenu={visibleMenu} toggleMenu={toggleMenu} isScrolled={isScrolled}/>
                </Route>
                <Route exact path="/apartments/params" >
                    <Apartments visibleMenu={visibleMenu} toggleMenu={toggleMenu} isScrolled={isScrolled}/>
                </Route>
                <Route>
                    <NotFound visibleMenu={visibleMenu} toggleMenu={toggleMenu} isScrolled={isScrolled}/>
                </Route>
            </Switch>
            <Footer/>
        </div>
    );
};

export default PagesLayout;