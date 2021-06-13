import React from 'react'
import './Video.css'

function Video({Avatar, ThumbNail, Title, Channel, Views, Time}) {
    return (
        <div className="Video">
                <img src="https://i.ytimg.com/vi/2Bw5f4vYL98/hq720.jpg" />
            {/* Avatar */}
            <div className="Video__Details">
                <div class="Video__ProfilePicture">
                    <img src="https://yt3.ggpht.com/ytc/AAUvwngQ4bmzYvPJ1N0eh27Rl67yAOoydc8TPeLcPa_4Tw=s68-c-k-c0x00ffffff-no-rj" />
                </div>
                <div class="Video__Right">
                    <h3>How Well Can an AI Learn Physics?</h3>
                    <p>Two Minute Papers</p>
                    <p>1.4M views • 11 months ago</p>
                </div>
            </div>
        </div>
    )
}

export default Video
