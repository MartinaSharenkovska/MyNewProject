import React from 'react';

import DrawerToggleButton from './DrawerToggleButton';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar-navigation">
            <div>
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="toolbar-logo"><a href="/"><img /></a></div>
            <div className="spacer"/>
            <div className="toolbar-navigation-buttons">
                <button type="btn" className="yellow-btn">Обуки за компании</button>
                <button type="btn" className="black-btn">Вработи наши студенти</button>
            </div>

        </nav>
    </header>
);

export default toolbar;