

import React, { useState } from "react"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import "./user-tabs.css"
import TradeRoom from "./trade-room/trade-room";


function UserTabs() {


    const [actualValue, setValue] = useState('Items')

    const handleChange = (e, newValue) => {
        setValue(newValue)
    }

    return (
        <div className="tabs-container-user">
            <div className="tabs-inner-container-user">
                <div>
                    <Tabs aria-label="basic tabs example" value={actualValue} onChange={handleChange} textColor="white"
                        TabIndicatorProps={{ style: { background: 'white' } }}>
                        <Tab label="Items" value="Items" style={{ marginRight: '2vw' }} />
                        <Tab label="Trade Rooms" value="Trade Rooms" style={{ marginRight: '2vw' }} />
                        <Tab label="Activity" value="Activity" style={{ marginRight: '2vw' }} />
                    </Tabs>
                </div>

                <div style={{height:'9vw', width:'100%'}}>

                </div>
            </div>
            <div className="user-body-container">
            {actualValue === 'Items' && <span>hola</span>}
            {actualValue === 'Trade Rooms' && <TradeRoom></TradeRoom>}
            {actualValue === 'Trade Rooms' && <span>sol</span>}
            </div>
       
        </div>
    )
}


export default UserTabs

