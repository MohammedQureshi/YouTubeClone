import React from 'react'
import './MenuItem.css'
import Button from '@material-ui/core/Button'

function MenuItem({Icon, Text}) {
    return (
        <div className="MenuItem">
            <Button className="MenuItem__Button" href="#buttons">
                <Icon className="MenuItem__Icon" />
                <h3>{Text}</h3>
            </Button>
        </div>
    )
}

export default MenuItem
