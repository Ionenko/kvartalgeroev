import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Tab = (props) => {

    const {onClick, label, activeTab} = props;

    const handleClick = () => {
        onClick(label);
    };

    return (
        <div
            className={
                classNames(
                    'tabs__nav__item',
                    {'tabs__nav__active': activeTab === label}
                )
            }
            onClick={handleClick}
        >
            {
                props.content
            }
        </div>
    );
};

Tab.propTypes = {
    label: PropTypes.string.isRequired,
    activeTab: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Tab;