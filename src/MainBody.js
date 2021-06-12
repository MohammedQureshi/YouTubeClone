import React from 'react'
import SideMenu from './SideMenu'
import Videos from './Videos'
import './MainBody.css'
import { Icon } from '@material-ui/core'
import AcUnitIcon from '@material-ui/icons/AcUnit';

function MainBody() {
    return (
        <div className="MainBody">
            <SideMenu />
            <Videos />
        </div>
    )
}

export default MainBody
