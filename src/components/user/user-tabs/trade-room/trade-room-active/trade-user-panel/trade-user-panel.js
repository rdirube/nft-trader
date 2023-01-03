import React, {useEffect, useState} from "react";
import '../trade-room-active.css'
import avaiableNfts from "../nfts-avaiable";
import monkey from '../../../../../../assets/images/monkey_1.png'
import tick from '../../../../../../assets/images/tick.png'
import connected from '../../../../../../assets/images/connected.png'
import monkey4 from '../../../../../../assets/images/monkey_4.png'

function TradeUserPanel() {
  
    const [avaiableNftsConst, avaiableNftsSetter] = useState([]);
  

    useEffect(() => {
        avaiableNftsSetter(avaiableNfts);
      
    }, []);


   return(

    <div className="monkey-user-trader-container">
        <div className="monkey-trade-active-user-outer">
            <div className="monkey-trade-active-user">
                <div className="monkey-trade-active-user-image">
                    <img style={{ width: '8vw', borderRadius: '50%' }} src={monkey}></img>
                </div>
                <div className="monkey-trade-active-user-info">
                    <div>
                        <span className="monkey-trade-active-user-title">MONKEEYZ</span>
                        <img src={tick} style={{ width: '1.8vw', marginLeft: '0.8vw', transform: 'translateY(0.3vw)' }}></img>
                    </div>
                    <div style={{ transform:'translateY(-0.5vw)', marginBottom:'0.5vw', marginTop:'0.5vw'}}>
                        <span style={{ fontSize: '1.2vw' }}>0xb42...3b3c</span>
                    </div>
                    <div style={{ transform: 'translateY(-0.7vw)' }}>
                        <img style={{ transform: 'translateY(0.7vw)' }} src={connected}></img>
                        <span style={{ fontSize: '1.2vw' }}>Online</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="monkey-trade-active-nft">
            <div style={{ width: '6%', cursor: 'pointer' }}>
            </div>
            <div className="monkey-trade-active-nft-outer-container">
                <div className="monkey-trade-active-nft-container">
                    {
                        avaiableNftsConst.map((nft) => {
                            return (
                                <div className="monkey-active-nft-container">
                                    <div className="monkey-active-nft-container-background"></div>
                                    <div className="monkey-active-nft-container-inner">
                                        <div className="monkey-active-nft-container-image">
                                            <img style={{ width: '100%', height: '100%' }} src={monkey4}></img>
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
            <div style={{ width: '6%', cursor: 'pointer' }}>
            </div>
        </div>
    </div>

   )

}



export default TradeUserPanel;