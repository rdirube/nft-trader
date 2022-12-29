import React, { useEffect } from "react";
import "./buy.css"
import lupita from '../../../assets/images/lupita.png'
import { useState } from "react";

function Buy() {

   const [searchFocusState, searchFocusHandler] = useState(false);
   

    return (
        <div className="buy-container">
            <div className="searcher-container" style={searchFocusState ? {borderBottom: '1px solid #329DFF'} : {borderBottom: '1px solid #FFFFFF'}}>
                <input type='text' onBlur={() => searchFocusHandler(false)} onFocus={() => searchFocusHandler(true)} className="buy-searcher" placeholder="Search"></input>
                <div style={{ width: '15%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img style={{ width: '1.3vw', height: '1.3vw' , cursor:'pointer'}} src={lupita}></img>
                </div>
            </div>
            <div className="blue-div">
                <div className="buy-content">
                    <div className="button-container">
                        <button className="buy-button">Buy the floor</button>
                    </div>

                    <div className="buy-options">
                        <select className="select-option" name="select-1">
                            <option selected value="value1">Option 1</option>
                        </select>
                    </div>
                    <div className="buy-options">
                        <select className="select-option" name="select-2">
                            <option selected value="value2">Option 2</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

    )
}



export default Buy