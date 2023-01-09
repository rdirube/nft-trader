

import React, { useState } from "react"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import "./user-tabs.css"
import TradeRoom from "./trade-room/trade-room";
import UserItems from "./user-items/user-items";
import anime from "animejs";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

function UserTabs() {


    const [actualValue, setValue] = useState('Items')
    const movementBar = document.getElementById('movement-option-bar');
    let actualMovementBarPos = 0;


    function vwToPx(number) {
        return (document.documentElement.clientWidth * number) / 100
    }


    function optionBarMovement(optPosition) {
        let posInPx = vwToPx(optPosition);
        actualMovementBarPos += (posInPx - actualMovementBarPos)
        anime({
            targets: movementBar,
            translateX: actualMovementBarPos,
            duration: 200,
            easing:'easeInOutQuad'
        })
    }


    function changeOption(option, optionPosition) {
        setValue(option);
        optionBarMovement(optionPosition)
    }


    return (
        <div className="tabs-container-user">
            <div className="tabs-inner-container-user">
                <div className="tabs-user-option" onClick={() => changeOption('Items', 0)}>
                    <span style={{ fontSize: '1.5vw' }}>Items</span>
                </div>
                <div className="tabs-user-option" onClick={() => changeOption('Trade Rooms', 11.25)}>
                    <span style={{ fontSize: '1.5vw' }}>Trade Rooms</span>
                </div>
                <div className="tabs-user-option" onClick={() => changeOption('Items', 22.50)}>
                    <span style={{ fontSize: '1.5vw' }}>Activity</span>
                </div>
                <div className="tabs-user-option">
                    <select style={{ backgroundColor: 'transparent', border: 'none' }} name="select-1">
                        <option selected value="" style={{ fontSize: '1.5vw' }} hidden>More</option>
                        <option value="value1">Option 1</option>
                    </select>
                </div>
                {/* <Tabs aria-label="basic tabs example" value={actualValue} onChange={handleChange} textColor="white"
                        TabIndicatorProps={{ style: { background: 'white' } }}>
                        <Tab label="Items" value="Items" style={{ marginRight: '2vw' }} />
                        <Tab label="Trade Rooms" value="Trade Rooms" style={{ marginRight: '2vw' }} />
                        <Tab label="Activity" value="Activity" style={{ marginRight: '2vw' }} />
                    </Tabs> */}


                {/* <div style={{height:'9vw', width:'100%'}}>

                </div> */}
                <div id="movement-option-bar">

                </div>
            </div>
            <div className="user-body-container">
                {actualValue === 'Items' && <UserItems></UserItems>}
                {actualValue === 'Trade Rooms' && <TradeRoom></TradeRoom>}
                {actualValue === 'Trade Rooms' && <span>sol</span>}
            </div>

        </div>
    )
}


export default UserTabs

