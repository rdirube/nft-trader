import React, { useState } from "react"
import "./trade-room.css"
import profile from '../../../../assets/images/user1_profile.png'



function TradeRoom() {
    return(
       <div className="trade-rooms-outer-container">
         <div className="trade-rooms-container">
            <div className="create-room-button-container">
              <button className="create-room-button">Create Room +</button>
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
                            <span style={{fontWeight:'800', fontSize:'2.2vw'}}>USERNAME</span>
                            </div>
                            <div style={{transform:'translateY(-1vw)'}}>
                            <span style={{fontSeize:'1.2vw'}}>0xb42...3b3c</span>
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
               </div>
            </div>
         </div>
       </div>
    )
}



export default TradeRoom;