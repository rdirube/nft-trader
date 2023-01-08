import React from "react";
import '../trade-room-active.css'
import tick from '../../../../../../assets/images/tick.png'
import symbol2 from '../../../../../../assets/images/certificate_02.png'
import symbol3 from '../../../../../../assets/images/certificate_03.png'




function MonkeyCard(props) {
    return (
        <div className="monkey-active-nft-container">
            <div className="monkey-active-nft-container-background"></div>
            <div className="monkey-active-nft-container-inner">
                <div className="monkey-active-nft-container-image">
                    <img style={{ width: '100%', height: '100%' }} src={props.nft.picture}></img>
                </div>
                <div className="monkey-active-nft-container-card-info">
                    <div className="monkey-active-nft-card-info-line" style={{ height: '30%' }}>
                        <div>
                            <span style={{ color: '#BDBDBD', fontSize: '0.7vw' }}>MONKEEZ</span>
                            <img style={{ width: '0.8vw', marginLeft: '3px' }} src={tick}></img>
                        </div>
                        <div>
                          <img style={{width:'1vw'}} src={symbol2}></img>
                        </div>
                    </div>
                    <div className="monkey-active-nft-card-info-line" style={{ height: '30%' }}>
                        <span style={{ fontSize: '1vw' }}>MONKEEZ #<span style={{ fontSize: '1vw' }}>{props.nft.name}</span></span>
                    </div>
                    <div className="monkey-active-nft-card-info-line" style={{ alignItems: 'center', height: '40%' }}>
                        <div>
                            <span style={{ color: '#BDBDBD', fontSize: '0.9vw' }}>Price</span>
                        </div>
                        <div>
                            <img style={{transform:'translateX(-0.4vw)'}} src={symbol3}></img>
                            <span style={{ fontSize: '1.6vw' }}>{props.nft.price}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default MonkeyCard