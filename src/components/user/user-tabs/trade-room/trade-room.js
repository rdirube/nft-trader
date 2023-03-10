import React, { useEffect, useState } from "react"
import "./trade-room.css"
import profile from '../../../../assets/images/user1_profile.png'
import door from '../../../../assets/images/door_tradeRoom.png'
import createRoomButton from '../../../../assets/images/btn_createRoom.png'
import TradeRoomActive from './trade-room-active/trade-room-active'
import nftsToChoose from '../../../body/tabs/items/itemsList'
import coloursToChoose from './trade-room-active/aux-pics-avaiable'
import rooms from '../../../../assets/images/Rooms.png'
import yes from  '../../../../assets/images/btn_YES.png'
import no from  '../../../../assets/images/btn_NO.png'
import chartOff from  '../../../../assets/images/closeModal_ico.png'
import modal from  '../../../../assets/images/Modal.png'
import sildeArrow from '../../../../assets/images/slideArrow_L.png'


function TradeRoom() {

    const [createRoomChart, createChartOn] = useState(false);
    const [tradeRoomActiveOn, tradeRoomActiveSwitch] = useState(false);
    const [coloursOnTrade, setColoursOnTrade] = useState([]);
    const [monkeysOnTrade, setMonkeysOnTrade] = useState([])



    useEffect(() => {
        let monkeyPics = nftsToChoose.map((nft) => nft.picture).slice(0, 10);
        console.log(nftsToChoose)
        setMonkeysOnTrade(monkeyPics)
        let colours = coloursToChoose.map((col) => col.picture)
        let coloursToShow = [];
        for (let i = 0; i < 10; i++) {
            coloursToShow.push(colours[Math.floor(Math.random() * 5)])
        }
        setColoursOnTrade(coloursToShow)
    }, [])


    return (
        <div className="trade-rooms-outer-container">
            {!tradeRoomActiveOn && <div className="trade-rooms-container">
                <div className="create-room-button-container">
                    <img src={createRoomButton} className="create-room-button" onClick={() => createChartOn(true)}></img>
                </div>
                <div className="trade-room-outer-container">
                    <img className="rooms-background" src={rooms}></img>
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
                                <div className="exchange-nfts-container">
                                    {
                                        monkeysOnTrade.map((mon) => {
                                            return (
                                                <div className="small-image-container" style={{ width: '100%', height: '100%' }}>
                                                    <img style={{ width: '3vw', borderRadius: '10px' }} src={mon}></img>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className="exchange-arrows"></div>
                                <div className="exchange-nfts-container">
                                    {
                                        coloursOnTrade.map((col) => {
                                            return (
                                                <div className="small-image-container">
                                                    <img src={col} style={{ width: '3vw', borderRadius: '10px' }}></img>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="enter-container">
                            <div className="enter-inner-container" >
                                <div className="enter-content-container" onClick={() => tradeRoomActiveSwitch(true)}>
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
                        <img src={modal} className='modal'></img>                  
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
                                        <img src={no} class="option-button" onClick={() => createChartOn(false)} ></img>
                                        <img src={yes} class="option-button" onClick={() => tradeRoomActiveSwitch(true)} ></img>
                                    </div>
                                </div>
                            </div>
                            <div onClick={() => createChartOn(false)} style={{ position: 'absolute', cursor: 'pointer', top: '8%', right: '6%' }}>
                                <img src={chartOff} className="x-charton"></img>
                            </div>
                        </div>
                    </div>
                }
            </div>
            }

            {tradeRoomActiveOn &&
                <TradeRoomActive></TradeRoomActive>
            }
        </div>

    )
}



export default TradeRoom;