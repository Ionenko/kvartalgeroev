import React, {useEffect, useRef} from 'react';
import Header from "../Header";
import Footer from "../Footer";
import Menu from "../Menu";
import gsap from 'gsap';
import Home from "../Pages/Home";

const HomeLayout = ({isScrolled, toggleMenu, visibleMenu}) => {

    let pageRef = useRef(null);

    const tl = gsap.timeline();

    useEffect(() => {
        tl.to(pageRef, 1.6,{autoAlpha: 1, delay: .6})
    });

    return (
        <div style={{opacity: 0}} ref={ page => pageRef = page}>
            <Header isSmall={true} toggleMenu={toggleMenu} isScrolled={isScrolled}/>
            <Menu visibleMenu={visibleMenu} toggleMenu={toggleMenu}/>
            <Home/>
            <Footer/>
        </div>
    );
};

export default HomeLayout;