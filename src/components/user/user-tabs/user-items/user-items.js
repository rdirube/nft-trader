import React, { useState } from "react"
import "./user-items.css"
import auxElements from "./user-items-list"
import Toggle from 'react-styled-toggle';

function UserItems() {
    return (
        <div className="user-items-outer-container">
            <div className="user-items-container">
                {auxElements.map((el) => {
                    return (
                        <div className="user-item-outer-container">
                            <div className="user-item-container">
                                <div className="user-item-image-container">
                                    <img style={{ width: '75%', height: '82%' }} src={el.picture}></img>
                                </div>
                                <div className="user-item-info-container">
                                    <div className="user-item-info-line" style={{height:'15%'}}>
                                        <div> <span style={{ fontSize: '0.8vw', color: '#BDBDBD' }}>User Profile</span></div>
                                    </div>
                                    <div className="user-item-info-line" style={{height:'30%'}}>
                                        <div> <span style={{ fontSize: '1vw' }}>USERPROF #9999</span></div>
                                    </div>
                                    <div className="user-item-info-line" style={{height:'15%'}}>
                                        <div> <span style={{ fontSize: '0.65vw', color: '#BDBDBD' }}>Price</span></div>
                                        <div> <span style={{ fontSize: '0.65vw', color: '#BDBDBD' }}>Open for Trade</span></div>
                                    </div>
                                    <div className="user-item-info-line" style={{height:'40%'}}>
                                        <div> <span style={{ fontSize: '1vw' }}>8</span></div>
                                        <div><Toggle backgroundColorButton="rgb(210, 210, 210)" backgroundColorUnchecked="#AD0909"
                                              backgroundColorChecked="#16AD09" width='50' height='15' sliderHeight='25' sliderWidth='25'></Toggle></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}


export default UserItems