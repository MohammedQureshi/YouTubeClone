import React from 'react'
import MenuItem from './MenuItem'
import './SideMenu.css'
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ScheduleIcon from '@material-ui/icons/Schedule';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
function SideMenu() {
    return (
        <div className="SideMenu">
            <div className="TopSection">
                <MenuItem Icon={HomeIcon} Text="Home" />
                <MenuItem Icon={ExploreIcon} Text="Explore" />
                <MenuItem Icon={SubscriptionsIcon} Text="Subscriptions" />
            </div>
            <div className="MiddleSection">
                <MenuItem Icon={VideoLibraryIcon} Text="Library" />
                <MenuItem Icon={HistoryIcon} Text="History" />
                <MenuItem Icon={OndemandVideoIcon} Text="Your videos" />
                <MenuItem Icon={ScheduleIcon} Text="Watch later" />
                <MenuItem Icon={AttachFileIcon} Text="Your clips" />
                <MenuItem Icon={ExpandMoreIcon} Text="Show more" />
            </div>
            <div className="MiddleSection">
                <h2>BEST OF YOUTUBE</h2>
                <MenuItem Icon={VideoLibraryIcon} Text="Music" />
                <MenuItem Icon={VideoLibraryIcon} Text="Sport" />
                <MenuItem Icon={VideoLibraryIcon} Text="Gaming" />
                <MenuItem Icon={VideoLibraryIcon} Text="Movies & shows" />
                <MenuItem Icon={VideoLibraryIcon} Text="News" />
                <MenuItem Icon={VideoLibraryIcon} Text="Live" />
                <MenuItem Icon={VideoLibraryIcon} Text="Fashion & beauty" />
                <MenuItem Icon={VideoLibraryIcon} Text="Learning" />
                <MenuItem Icon={VideoLibraryIcon} Text="Spotlight" />
                <MenuItem Icon={VideoLibraryIcon} Text="360° Video" />
            </div>
            <div className="MiddleSection">
                <MenuItem Icon={VideoLibraryIcon} Text="Browse channels" />
            </div>
            <div className="MiddleSection">
                <h2>MORE FROM YOUTUBE</h2>
                <MenuItem Icon={VideoLibraryIcon} Text="YouTube Premium" />
                <MenuItem Icon={VideoLibraryIcon} Text="Live" />
            </div>
            <div className="BottomSection">
                <MenuItem Icon={VideoLibraryIcon} Text="Settings" />
                <MenuItem Icon={VideoLibraryIcon} Text="Report history" />
                <MenuItem Icon={VideoLibraryIcon} Text="Help" />
                <MenuItem Icon={VideoLibraryIcon} Text="Send feedback" />
            </div>
        </div>
    )
}

export default SideMenu
