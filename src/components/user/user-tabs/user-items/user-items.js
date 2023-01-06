import React, { useState } from "react"
import "./user-items.css"
import auxElements from "./user-items-list"
import Toggle from 'react-styled-toggle';
import itemFramework from '../../../../assets/images/item_NFT.png'
import symbol2 from '../../../../assets/images/certificate_02.png'
import symbol1 from '../../../../assets/images/certificate_03.png'


function UserItems() {
    return (
        <div className="user-items-outer-container">
            <div className="user-items-container">
                {auxElements.map((el) => {
                    return (
                        <div className="user-item-outer-container">
                            <img className="item-framework" src={itemFramework}>
                            </img>
                            <div className="user-item-container">
                                <div className="user-item-image-container">
                                    <img style={{ width: '75%', height: '82%' }} src={el.picture}></img>
                                </div>
                                <div className="user-item-info-container">
                                    <div className="user-item-info-line" style={{ height: '15%' }}>
                                        <div> <span style={{ fontSize: '0.8vw', color: '#BDBDBD' }}>User Profile</span></div>
                                        <div> <img style={{width:'1vw'}} src={symbol2}></img></div>
                                    </div>
                                    <div className="user-item-info-line" style={{ height: '30%' }}>
                                        <div> <span style={{ fontSize: '1vw' }}>USERPROF #9999</span></div>
                                    </div>
                                    <div className="user-item-info-line" style={{ height: '15%' }}>
                                        <div> <span style={{ fontSize: '0.65vw', color: '#BDBDBD' }}>Price</span></div>
                                        <div> <span style={{ fontSize: '0.65vw', color: '#BDBDBD' }}>Open for Trade</span></div>
                                    </div>
                                    <div className="user-item-info-line" style={{ height: '40%' }}>
                                        <div><img style={{width:'1vw'}} src={symbol1}></img> <span style={{ fontSize: '1vw' }}>8</span></div>
                                        <div><Toggle backgroundColorButton="rgb(210, 210, 210)" backgroundColorUnchecked="#AD0909"
                                            backgroundColorChecked="#16AD09" width='60' height='15' sliderHeight='25' sliderWidth='25'></Toggle></div>
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