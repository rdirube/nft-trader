import React, { useState } from "react"
import "./trade-room.css"
import profile from '../../../../assets/images/user1_profile.png'
import door from '../../../../assets/images/door.png'
import { height } from "@mui/system"


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
                            <div>
                            <span style={{fontSize:'1.2vw'}}>0xb42...3b3c</span>
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
                   <div style={{width:'100%', height:'70%'}}>
                     <img style={{width:'100%', height:'100%'}} src={door}></img>
                   </div>
                   <div style={{display:'flex', justifyContent:'center', transform:'translateY(0.2vw)'}}>
                     <span style={{fontSize:'1.6vw'}}>ENTER</span>
                   </div>
                </div>
                 </div>
               </div>
            </div>
         </div>
       </div>
    )
}



export default TradeRoom;