import React, { useEffect, useState } from "react";
import '../trade-room-active.css'
import tick from '../../../../../../assets/images/tick.png'
import connected from '../../../../../../assets/images/connected.png'
import sildeArrow from '../../../../../../assets/images/slideArrow_L.png'
import MonkeyCard from "./monkey-card";
import anime from "animejs";



function TradeUserPanel(props) {

    const [avaiableNftsConst, avaiableNftsSetter] = useState([]);
    const nftContainer = document.getElementsByClassName('monkey-trade-active-nft-container');
    const [actualNftContainerPos, setActualPos] = useState(12);

    useEffect(() => {
        avaiableNftsSetter(props.cards);

    }, []);


    function moveArrow(number, isForward) {
        setActualPos(actualNftContainerPos + (isForward ? number : -number));
        let distanceToPx = (document.documentElement.clientWidth * actualNftContainerPos) / 100
        console.log(distanceToPx, nftContainer[0].offsetWidth, isForward)
        anime({
            targets: nftContainer,
            translateX: isForward ? Math.max(-distanceToPx, -nftContainer[0].offsetWidth) : Math.min(0, -distanceToPx),
            duration: 300,
            easing: 'linear'
        })
    }


    return (

        <div className="monkey-user-trader-container">
            <div className="monkey-trade-active-user-outer">
                <div className="monkey-trade-active-user">
                    <div className="monkey-trade-active-user-image">
                        <img style={{ width: '8vw', borderRadius: '50%' }} src={props.profilePic}></img>
                    </div>
                    <div className="monkey-trade-active-user-info">
                        <div>
                            <span className="monkey-trade-active-user-title">MONKEEYZ</span>
                            <img src={tick} style={{ width: '1.8vw', marginLeft: '0.8vw', transform: 'translateY(0.3vw)' }}></img>
                        </div>
                        <div style={{ transform: 'translateY(-0.5vw)', marginBottom: '0.5vw', marginTop: '0.5vw' }}>
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
                <div className="arrow-container" style={{ width: '6%', cursor: 'pointer' }}>
                    <img src={sildeArrow} onClick={() => moveArrow(12, false)} style={{ width: '5vw', transform: 'translate(-1vw,-1vw)' }}></img>
                </div>
                <div className="monkey-trade-active-nft-outer-container">
                    <div className="monkey-trade-active-nft-container">
                        {
                            avaiableNftsConst.map((nft) => {
                                return (
                                    <div class="monkey-card-outer-container">
                                        <MonkeyCard nft={nft}></MonkeyCard>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
                <div className="arrow-container-r" onClick={() => moveArrow(12, true)}>
                    <img src={sildeArrow} style={{ width: '5vw', transform: 'translateY(1.9vw)' }}></img>
                </div>
            </div>
        </div>

    )

}



export default TradeUserPanel;