import React, { useEffect, useState } from "react"
import "./trade-room-active.css"
import avaiableNfts from "./nfts-avaiable"
import table from '../../../../../assets/images/table.png';
import table2 from '../../../../../assets/images/table2.png'
import TradeUserPanel from "./trade-user-panel/trade-user-panel"
import auxPictures from "./aux-pics-avaiable";
import monkey4 from '../../../../../assets/images/monkey_4.png'
import auxProfile from '../../../../../assets/images/replace_photo.png'
import MonkeyCard from "./trade-user-panel/monkey-card";
import tradeArrow from '../../../../../assets/images/tradeArrow_L.png'
import chatContainer from '../../../../../assets/images/chat_BG.png'



function TradeRoomActive() {


    const [inTableNftsConst, inTableNftsSetter] = useState([]);
    const [inTableNftsConstAux, inTableNftsAuxSetter] = useState([]);



    useEffect(() => {
        let nftToSet = avaiableNfts.slice(0, 5);
        inTableNftsSetter(nftToSet);
        let letNftAux = auxPictures.slice(0, 3);
        inTableNftsAuxSetter(letNftAux)
    }, []);



    return (
        <div className="trade-room-active-container">
            <TradeUserPanel panel={0} profilePic={monkey4} cards={avaiableNfts} key={'upper'}></TradeUserPanel>
            <div className="trade-table-outer-container">
                <div className="trade-table-container">
                    <div className="trade-table-image-container">
                        <img src={table} style={{ height: '90%', width: '100%' }}></img>
                        <div className="nfts-table-container">
                            {
                                inTableNftsConst.map((nft) => {
                                    return (
                                        <div class="monkey-card-outer-container">
                                            <MonkeyCard nft={nft}></MonkeyCard>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="exchange-arrow-container">
                        <div style={{ transform: 'translateX(-11vw)' }}>
                            <img src={tradeArrow} style={{transform:'rotate(-90deg)' , width:'7vw' , cursor:'pointer'}}></img>
                        </div>
                        <div style={{ transform: 'translateX(-11vw)' }}>
                            <img src={tradeArrow} style={{transform:'rotate(90deg)', width:'7vw' , cursor:'pointer'}}></img>
                        </div>
                    </div>
                    <div className="trade-table-image-container">
                        <img src={table2} style={{ height: '90%', width: '100%' }}></img>
                        <div className="nfts-table-container">
                            {
                                inTableNftsConstAux.map((nft) => {
                                    return (
                                        <div class="monkey-card-outer-container">
                                            <MonkeyCard nft={nft}></MonkeyCard>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="trade-table-chat-container">
                    <img style={{width:'100%', height:'100%', position:'absolute'}} src={chatContainer}></img>
                    <div className="trade-chat-inner-container">
                    <span className="chat-placeholder">CHAT</span>
                    </div>
                </div>
            </div>
            <TradeUserPanel  panel={1} profilePic={auxProfile} cards={auxPictures} key={'down'}></TradeUserPanel>
        </div>

    )
}


export default TradeRoomActive