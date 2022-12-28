import React from "react";
import "./profile.css"
import testMonkey from '../../assets/images/test_monkey.png'
import tick from '../../assets/images/tick.png'
import copy from '../../assets/images/copy.png'
import connected from '../../assets/images/connected.png'



function Profile() {
    return (
        <div className="profile-container">
           <div className="profile-pic-container">
             <img style={{width:'10vw'}} src={testMonkey}></img>
           </div>
           <div className="info-container">
            <div className="info-line-container">
            <span style={{color:'white', display:'inline-block', marginRight:'6px'}}>USERNAME</span>
             <img style={{width:'2.1vw'}} src={tick}></img>
            </div>
            <div className="info-line-container">
                <span className="online-info">0xb42...3b3c</span>
                <img src={copy} style={{width:'1vw', marginLeft:'5px'}}></img>
                <img src={connected} style={{width:'1.5vw', marginLeft:'5px', transform:'translateY(0.7vw)'}}></img>
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
                <span className="quantity">1.25</span>
                <span className="info">Floor price</span>
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
        </div>
    )
}



export default Profile