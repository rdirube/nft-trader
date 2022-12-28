import React from "react";
import "./header.css"
import astronaut from '../../assets/images/astronaut.png'
import cart from '../../assets/images/cart.png'
import profile from '../../assets/images/profile.png'
import lupita from '../../assets/images/lupita.png'
import monkeysHeader from '../../assets/images/header_monkeys.png'



function Header() {
    return (
        <div className="complete-header-container">
         <div className="header-container">
            <div style={{width:'90%', display:'flex', justifyContent:'space-between' , alignItems:'center'}}>
            <div>
                <span className="trader-title">NFT TRADER</span>
            </div>
            <div style={{width:'35%', padding:'2px', borderBottom:'1px solid #FFFFFF', display:'flex', justifyContent:'space-evenly'}}>
              <input class="searcher" type='text' placeholder="Search items, collections, and accounts"></input>
              <div style={{width:'5%', display:'inline-block'}}>
              <img src={lupita}></img>
              </div>
            </div>
            <div style={{display:'flex', transform:'translateX(-30%)'}}>
                <a className="header-opt">Marketplace</a>
                <a className="header-opt">Ranking</a>
                <a className="header-opt">Blog</a>
            </div>
            <div>
                <a><img className="header-logo" src={astronaut}></img></a>
                <a><img className="header-logo" src={cart}></img></a>
                <a><img className="header-logo" src={profile}></img></a>
            </div>
            </div>
        </div>
         <div style={{display:'flex', justifyContent:'center', backgroundColor:'#073662'}}>
            <img style={{width:'90%'}} src={monkeysHeader}></img>
         </div>
         </div>
       
    )
}




export default Header