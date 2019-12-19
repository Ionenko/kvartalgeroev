import React, {useRef, useEffect} from 'react';
import './Loader.scss';
import gsap from "gsap";

const Loader = ({animationComplete}) => {

    let loaderRef = useRef(null);

    const tl = gsap.timeline({
            onComplete: () => { animationComplete()}
        }
    );

    useEffect(() => {

        let images = loaderRef.querySelectorAll('.preloader__img');
        let overlayFirst = loaderRef.querySelectorAll('.preloader__overlay_1');
        let overlaySecond = loaderRef.querySelectorAll('.preloader__overlay_2');

        tl.to(overlayFirst, {duration: 2, ease: "power2.inOut", y: "100%"});
        tl.to(overlaySecond, {duration: 2, ease: "power2.inOut", y: "100%", delay: -1.6});
        tl.addLabel("start");
        tl.to(images,{
            opacity: 1,
            scale: 1.4,
            ease: "power2.out",
            stagger: {
                amount: 4,
            }
        },"start")
            .to(images,{
                opacity: 0,
                ease: "power2.out",
                scale: 0,
                stagger: {
                    amount: 4
                }
            },"start+=.2")
        tl.to(overlayFirst, {duration: 2, ease: "power2.inOut", y: "-100%"});
        tl.to(overlaySecond, {duration: 2, ease: "power2.inOut", y: "-100%", delay: -1.6});

    }, );

    return (
        <div className="preloader" ref={loader => loaderRef = loader}>
            <div className="preloader__overlay preloader__overlay_1"/>
            <div className="preloader__overlay preloader__overlay_2"/>
            <div className="preloader__center">
                <div className="preloader__img preloader__img_1"/>
                <div className="preloader__img preloader__img_2"/>
                <div className="preloader__img preloader__img_3"/>
                <div className="preloader__img preloader__img_4"/>
                <div className="preloader__img preloader__img_5"/>
                <div className="preloader__img preloader__img_6"/>
                <div className="preloader__img preloader__img_7"/>
                <div className="preloader__img preloader__img_8"/>
                <div className="preloader__img preloader__img_9"/>
                <div className="preloader__img preloader__img_10"/>
            </div>
        </div>
    );
};

export default Loader;