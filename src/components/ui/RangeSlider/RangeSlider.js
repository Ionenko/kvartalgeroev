import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const CustomSlider = withStyles({
    root: {
        color: '#1d1761',
        margin: 0
    },
    thumb: {
        height: 16,
        width: 16,
        backgroundColor: '#ed1944',
        marginTop: -7
    },
    valueLabel: {
        left: 'auto',
        right: 'auto',
        margin: 'auto',
        top: 34,

        '& > span': {
            borderRadius: 2,
            transform: 'none',
            width: 'auto',
            height: 'auto',
            padding: '2px 6px',

            '& > span' : {
                transform: 'none'
            }
        },
    },
    rail: {
        backgroundColor: '#fff'
    },
    mark: {
        opacity: 0,
        fontWeight: 700
    },
    markLabel: {
        color: 'currentColor',
        fontSize: '15px',
        fontWeight: 700,
        lineHeight: 1,
        top: 32
    },
    markLabelActive : {
        opacity: 0
    }
})(Slider);

const RangeSlider = (props) => {

    return (
        <div>
            <CustomSlider
                {...props}
            />
        </div>
    );
};

export default RangeSlider;