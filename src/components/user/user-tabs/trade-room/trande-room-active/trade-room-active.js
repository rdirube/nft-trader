import React, { useState } from "react"
import "./trade-room-active.css"
import monkey from '../../../../../assets/images/monkey_1.png'



function TradeRoomActive() {
    return(
        <div className="trade-room-active-container">
             <div className="monkey-user-trader-container">
                <div className="monkey-trade-active-user-outer">
                    <div className="monkey-trade-active-user">
                        <div className="monkey-trade-active-user-image">
                            <img style={{opacity:'1'}} src={monkey}></img>
                        </div>
                    </div>

                </div>
             </div> 
        </div>
    )
}


export default TradeRoomActive