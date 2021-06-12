import React from 'react'
import './YouTubeHeader.css'
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import MenuIcon from '@material-ui/icons/Menu';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import DashboardIcon from '@material-ui/icons/Dashboard';
import NotificationsIcon from '@material-ui/icons/Notifications';
import YouTubeIcon from '@material-ui/icons/YouTube';
function YouTubeHeader() {
    return (
        <div className="youtube__header">
            {/* Logo */}
            <div className="youtube__logo">
                <MenuIcon classname="youtube__hamburgerMenu" />
                <YouTubeIcon className="youtube__materialIcon" /><h3>YouTube</h3>
            </div>
            {/* Search Bar */}
            <div className="youtube__search">
                <form class="youtube__searchBar" action="">
                    <input type="text" placeholder="Search" name="search" />
                    <button type="submit"><SearchIcon className="youtube__searchIcon" /></button>
                </form>
                <MicIcon className="youtube__micIcon" />
            </div>
            {/* Menu Items */}
            <div className="youtube__menu">
                <VideoCallIcon />
                <DashboardIcon />
                <NotificationsIcon />
                <img src="https://media-exp3.licdn.com/dms/image/C4E03AQF2s8dGWpgC5g/profile-displayphoto-shrink_800_800/0/1592998404125?e=1628726400&v=beta&t=tpzuv-7zuv8j5pny_nxEG_rjU6Q-_YrMz9Q1IJoKrto" alt="profile" />
            </div>
        </div>
    )
}

export default YouTubeHeader
