import React from 'react';

const TabsItem = (props) => {
    return (
        <div className="tabs__tab">
            {props.children}
        </div>
    );
};

export default TabsItem;