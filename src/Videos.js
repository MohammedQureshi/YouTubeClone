import React from 'react'
import './Videos.css'
import Video from './Video'

function Videos() {
    return (
        <div className="Videos">
            <div className="Section">
                <Video className="Videos__Flex" />
                <Video className="Videos__Flex" />
                <Video className="Videos__Flex" />
                <Video className="Videos__Flex" />
            </div>

            <div className="Section">
                <Video className="Videos__Flex" />
                <Video className="Videos__Flex" />
                <Video className="Videos__Flex" />
                <Video className="Videos__Flex" />
            </div>

            <div className="Section">
                <Video className="Videos__Flex" />
                <Video className="Videos__Flex" />
                <Video className="Videos__Flex" />
                <Video className="Videos__Flex" />
            </div>

            <div className="Section">
                <Video className="Videos__Flex" />
                <Video className="Videos__Flex" />
                <Video className="Videos__Flex" />
                <Video className="Videos__Flex" />
            </div>

        </div>
    )
}

export default Videos
