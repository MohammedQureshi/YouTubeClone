import React from 'react'
import './Videos.css'
import Video from './Video'

function Videos() {
    return (
        <div className="Videos">
            <div className="Videos__Topics">
                <h3> All </h3>
                <h3> Gordon Ramsay </h3>
                <h3> Live </h3>
                <h3> Deep House </h3>
                <h3> Game shows </h3>
                <h3> Music </h3>
                <h3> Oceans </h3>
                <h3> Cooking shows </h3>
                <h3> Comedy </h3>
                <h3> Chocolate </h3>
                <h3> Eating </h3>
                <h3> Nature </h3>
                <h3> Terrestrial animals </h3>
                <h3> Canis </h3>
                <h3> Puppies </h3>
                <h3> Driving </h3>
                <h3> ReactJS </h3>
                <h3> &gt; </h3>
            </div>
            <div className="Videos__Stack">
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

        </div>
    )
}

export default Videos
