import React, { useState } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import "./tabs.css"
import Items from './items/items'
import Stats from './stats/stats'




function Table() {


    const [actualValue, setValue] = useState('Items')

    const handleChange = (e, newValue) => {
        setValue(newValue)
    }

    return (
    <>
        <div className="tabs-container">
            <div className="tabs-inner-container">
            <Tabs aria-label="basic tabs example" value={actualValue} onChange={handleChange} textColor="white"
               indicatorColor="white">
                <Tab label="Items" value="Items" style={{marginRight:'3.5vw'}} />
                <Tab label="Stats" value="Stats" />
            </Tabs>
            </div>  
            {actualValue === 'Items' && <Items />}
        {actualValue === 'Stats' && <Stats />}    
        </div>
        
     </>


    )

}



export default Table