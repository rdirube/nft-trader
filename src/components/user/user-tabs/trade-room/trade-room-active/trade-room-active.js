import React, { useEffect, useState } from "react"
import "./trade-room-active.css"

import avaiableNfts from "./nfts-avaiable"
import inTableNfts from './nfts-avaiable'
import table from '../../../../../assets/images/table.png';
import table2 from '../../../../../assets/images/table2.png'
import TradeUserPanel from "./trade-user-panel/trade-user-panel"
import tick from '../../../../../assets/images/tick.png'

function TradeRoomActive() {


    const [inTableNftsConst, inTableNftsSetter] = useState([]);
    


    useEffect(() => {
        let nftToSet = avaiableNfts.slice(0,5);
        inTableNftsSetter(nftToSet);
    }, []);



    return (
             <div className="trade-room-active-container">
                          <TradeUserPanel></TradeUserPanel>        
            <div className="trade-table-outer-container">
                <div className="trade-table-container">
                    <div className="trade-table-image-container">
                        <img src={table} style={{ height: '90%' }}></img>
                        <div className="nfts-table-container">
                            {
                                inTableNftsConst.map((nft) => {
                                    return(
                                        <div className="monkey-active-nft-container">
                                    <div className="monkey-active-nft-container-background"></div>
                                    <div className="monkey-active-nft-container-inner">
                                        <div className="monkey-active-nft-container-image">
                                            <img style={{ width: '100%', height: '100%' }} src={nft.picture}></img>
                                        </div>
                                        <div className="monkey-active-nft-container-card-info">
                                            <div className="monkey-active-nft-card-info-line" style={{ height: '30%' }}>
                                                <div>
                                                    <span style={{ color: '#BDBDBD', fontSize: '0.7vw' }}>MONKEEZ</span>
                                                    <img style={{ width: '0.8vw', marginLeft: '5px' }} src={tick}></img>
                                                </div>
                                            </div>
                                            <div className="monkey-active-nft-card-info-line" style={{ height: '30%' }}>
                                                <span style={{ fontSize: '1vw' }}>MONKEEZ #<span style={{ fontSize: '1vw' }}>{nft.name}</span></span>
                                            </div>
                                            <div className="monkey-active-nft-card-info-line" style={{ alignItems: 'center', height: '40%' }}>
                                                <div>
                                                    <span style={{ color: '#BDBDBD', fontSize: '0.9vw' }}>Price</span>
                                                </div>
                                                <div>
                                                    <span style={{ fontSize: '1.6vw' }}>{nft.price}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div>
                    </div>
                    <div className="trade-table-image-container">
                        <img src={table2} style={{ height: '90%' }}></img>
                    </div>
                </div>
                <div className="trade-table-chat-container">
                    <span className="chat-placeholder">CHAT</span>
                </div>
            </div>        
                <TradeUserPanel></TradeUserPanel>
            </div> 
 
    )
}


export default TradeRoomActive