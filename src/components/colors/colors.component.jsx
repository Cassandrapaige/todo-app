import React, {useState} from 'react'

import './colors.styles.scss'

const colors = [ '#F23D5D', '#C33E8A', '#FA5D93', '#04C4D9', '#6321A6', '#F29F05', '#F24141', '#03A688' ];

const Colors = ({handleClick, pickedColor, active}) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <>
        <div className="color-menu-icon" style = {{backgroundColor: pickedColor}} onClick = {() => setIsActive(!isActive) }>
        <i class="fas fa-palette"></i>
        </div>
        {isActive ? 
            <div className = 'color-menu'>
                <h3>Choose a color theme</h3>
                {colors.map(color => (
                    <div className="color" style = {{backgroundColor: color}} onClick = { handleClick }></div>
                ))}
            </div>
        : ''
        }

        </>
    )
}

export default Colors;