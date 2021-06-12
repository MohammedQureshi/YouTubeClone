import React from 'react'
import SideMenu from './SideMenu'
import Videos from './Videos'
import './MainBody.css'

function MainBody() {
    return (
        <div className="MainBody">
            <SideMenu />
            <Videos />
        </div>
    )
}

export default MainBody
