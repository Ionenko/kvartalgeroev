import React, {useRef} from 'react';

const BenefitsItem = ({item}) => {
    const {img, text} = item;

    let circleRef = useRef(null);

    const handelMouseEvent = (e) => {

        let x = parseInt( (e.pageX - e.currentTarget.offsetLeft) / window.innerWidth * 150 );
        let y = parseInt( (e.pageY - e.currentTarget.offsetTop) / window.innerHeight * 150 );
        circleRef.style.transform = 'translate(' + (-x) + 'px, ' + (-y) + 'px)';

    };

    return (
        <div className="benefits__item wow zoomIn" data-wow-delay="200ms" onMouseMove={handelMouseEvent}>
            <div className="benefits__img">
                <div className="benefits__circle" ref={el => circleRef = el} />
                <img src={img} alt="benefits" />
            </div>
            <div className="benefits__text">
                <span dangerouslySetInnerHTML={{ __html: text }}>
                </span>
            </div>
        </div>
    );
};

export default BenefitsItem;