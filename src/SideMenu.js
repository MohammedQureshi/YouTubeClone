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
        </div>
    )
}

export default SideMenu
