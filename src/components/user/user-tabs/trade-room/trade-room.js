import React, { useState } from "react"
import "./trade-room.css"
import profile from '../../../../assets/images/user1_profile.png'
import door from '../../../../assets/images/door.png'
import { height } from "@mui/system"
import TradeRoomActive from './trande-room-active/trade-room-active'


function TradeRoom() {

    const [createRoomChart, createChartOn] = useState(false);
    const [tradeRoomActiveOn, tradeRoomActiveSwitch] = useState(false);


    return (
        <div className="trade-rooms-outer-container">
            {/* <div className="trade-rooms-container">
                <div className="create-room-button-container">
                    <button className="create-room-button" onClick={() => createChartOn(true)}>Create Room +</button>
                </div>
                <div className="trade-room-container">
                    <div className="trade-user-container">
                        <div className="trade-user-inner-container">
                            <div className="trade-user-info-container">
                                <div className="trade-user-image-container">
                                    <img className="trade-user-image" src={profile}></img>
                                </div>
                                <div className="trade-user-info">
                                    <div>
                                        <span style={{ fontWeight: '800', fontSize: '2.2vw' }}>USERNAME</span>
                                    </div>
                                    <div>
                                        <span style={{ fontSize: '1.2vw' }}>0xb42...3b3c</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="exchange-container">
                        <div className="exchange-inner-container">
                            <div className="exchange-nfts-container"></div>
                            <div className="exchange-arrows"></div>
                            <div className="exchange-nfts-container"></div>
                        </div>
                    </div>
                    <div className="enter-container">
                        <div className="enter-inner-container">
                            <div className="enter-content-container">
                                <div style={{ width: '100%', height: '70%' }}>
                                    <img style={{ width: '100%', height: '100%' }} src={door}></img>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center', transform: 'translateY(0.2vw)' }}>
                                    <span style={{ fontSize: '1.6vw' }}>ENTER</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {createRoomChart &&
                <div className="full-chart-container">
                    <div className="charton-container">
                    </div>
                    <div className="charton">
                        <div className="inner-charton">
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <span className="create-trade-room-title">CREATE TRADE ROOM</span>
                            </div>
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                <div style={{ width: '80%', height: '3vw' }}>
                                    <div style={{ marginBottom: '0.3vw' }}>
                                        <span style={{ fontSize: '0.9vw', fontWeight: '400' }}>Invite a user or input address to trade:</span>
                                    </div>
                                    <div className="input-create-room-container">
                                        <input placeholder="User name" className="input-create-room"></input>
                                    </div>
                                </div>
                            </div>
                            <div className="create-room-options-container-outer">
                                <div className="create-room-options-container">
                                    <button class="option-button" onClick={() => createChartOn(false)} style={{ backgroundColor: 'red' }}>No</button>
                                    <button class="option-button" style={{ backgroundColor: 'green' }}>Yes</button>
                                </div>
                            </div>
                        </div>
                        <div onClick={() => createChartOn(false)} style={{position:'absolute', cursor:'pointer', top:'1%', right:'4%'}}> 
                            <span className="x-charton">X</span>
                        </div>
                    </div>
                </div>
            } */}
          <TradeRoomActive></TradeRoomActive>
        </div>

    )
}



export default TradeRoom;