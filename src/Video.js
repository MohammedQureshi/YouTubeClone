import React from 'react'
import './Video.css'
import Button from '@material-ui/core/Button'

function Video({Avatar, ThumbNail, Title, Channel, Views, Time}) {
    return (
        <Button className="Video__Clickable">
            <div className="Video">
                <img src={ThumbNail} alt="ThumbNail" />
                {/* Avatar */}
                <div className="Video__Details">
                    <div class="Video__ProfilePicture">
                        <img src={Avatar} alt="Avatar" />
                    </div>
                    <div class="Video__Right">
                        <h3>{Title}</h3>
                        <p>{Channel}</p>
                        <p>{Views} • {Time}</p>
                    </div>
                </div>
            </div>
        </Button>
    )
}

export default Video
