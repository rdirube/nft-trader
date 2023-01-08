import React from "react";
import "./profile.css"
import testMonkey from '../../assets/images/test_monkey.png'
import tick from '../../assets/images/tick.png'
import copy from '../../assets/images/copy.png'
import connected from '../../assets/images/connected.png'
import share from '../../assets/images/share.png'
import profileFramework from '../../assets/images/profile_Main.png'
import symbol3 from '../../assets/images/certificate_01.png'



function Profile() {




   return (
      <div className="profile-container">
         <div className="profile-pic-container">
            <div style={{ position: 'absolute' }}>
               <img style={{ width: '10vw', height: '10vw' }} src={profileFramework}></img>
            </div>
            {/* <div style={{position:'absolute'}}>
            <img style={{width:'8vw', height:'10vw'}} src={testMonkey}></img>

            </div> */}
         </div>
         <div className="info-container">
            <div className="info-line-container">
               <span style={{ color: 'white', display: 'inline-block', marginRight: '1vw' }}>USERNAME</span>
               <img style={{ width: '2.1vw', transform: 'translateY(0.3vw)' }} src={tick}></img>
            </div>
            <div className="info-line-container">
               <span className="online-info">0xb42...3b3c</span>
               <img src={copy} style={{ width: '1vw', marginLeft: '5px', cursor: 'pointer' }}></img>
               <img src={connected} style={{ width: '1.5vw', marginLeft: '5px', transform: 'translateY(0.7vw)' }}></img>
               <span className="online-info">Online</span>
            </div>
            <div className="info-line-container">
               <span className="online-info">Monkeez is a 4k collection of randomly generated NFTs on the Avalanche blockchain.</span>
            </div>
            <div className="info-line-container">
               <span className="online-info">items <span className="online-info-b">3.4K</span>   ·   Created <span className="online-info-b">Aug 2022</span>   ·   Creator fee <span className="online-info-b">5%</span></span>
            </div>
         </div>
         <div className="market-info-container">
            <div className="info-data-container">
               <div>
               <img style={{transform:'translateX(-35px)', position:'absolute'}} src={symbol3}></img>
               <span className="quantity">1.25</span>
               </div>
               <span className="info" style={{transform:'translateY(-0.2vw)'}}>Floor price</span>
            </div>
            <div className="info-data-container">
               <span className="quantity">$1.09K</span>
               <span className="info">Highest Sale Price</span>
            </div>
            <div className="info-data-container">
               <span className="quantity">$36</span>
               <span className="info">Average Sale Price</span>
            </div>
            <div className="info-data-container">
               <span className="quantity">$58.99K</span>
               <span className="info">Total Sales Volume</span>
            </div>
         </div>
         <div style={{ position: 'absolute', right: '6%', top: '20.5vw' }}>
            <img style={{ width: '1.2vw', cursor: 'pointer' }} src={share}></img>
         </div>
      </div>
   )
}



export default Profile