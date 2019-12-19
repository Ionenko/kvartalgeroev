import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './Tabs.scss';

import Tab from "../Tab";

const Tabs = (props) => {

    const defaultActiveTab = props.active ? props.active : props.children[0].props.label;

    const [activeTab, setActiveTab] = useState(defaultActiveTab);

    const handleClickOnTabItem = (tab) => {
        setActiveTab(tab);
        const {onClick} = props;

        if(onClick && typeof onClick === 'function'){
            activeTab !== tab && onClick(tab);
        }
    };

    return (
        <div className="tabs">
            <div className="tabs__nav">
                {
                    props.children.map((child) => {
                        const {label, content} = child.props;

                        return (
                            <Tab
                                activeTab={activeTab}
                                label={label}
                                content={content}
                                key={label}
                                onClick={handleClickOnTabItem}
                            />
                        )
                    })
                }
            </div>
            <div className="tabs__container">
                {
                    props.children.map((child) => {
                        return child.props.label !== activeTab ? undefined : child.props.children
                    })
                }
            </div>
        </div>
    );
};

Tabs.propTypes = {
    children: PropTypes.instanceOf(Array).isRequired
};

export default Tabs;