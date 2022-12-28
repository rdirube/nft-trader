import React from "react";
import "./buy.css"



function Buy() {
    return (
        <div className="buy-container"> 
        <div className="blue-div">
            <div className="buy-content">
                <div className="button-container"> 
                <button className="buy-button">Buy the floor</button>
                </div>
                <div className="searcher-container">
                    <input type='text' className="buy-searcher" placeholder="search"></input>
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