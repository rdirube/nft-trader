import React , {useState} from "react";
import "./header.css"
import astronaut from '../../assets/images/astronaut.png'
import cart from '../../assets/images/cart.png'
import profile from '../../assets/images/profile_ico.png'
import lupita from '../../assets/images/lupita.png'
import monkeysHeader from '../../assets/images/header_monkeys.png'
import nftTraderLogo from '../../assets/images/NFTraderLogo.png'


function Header(props) {

    const [searchFocusState, searchFocusHandler] = useState(false);
    const setUserHandler = (state) => {
        console.log(props)
        props.userModeSetter(state);
     };

    return (
        <div className="complete-header-container">
         <div className="header-container">
            <div style={{width:'90%', display:'flex', justifyContent:'space-between' , alignItems:'center'}}>
            <div style={{transform: 'translateY(-0.8vw)'}}>
                <img src={nftTraderLogo} style={{marginRight:'1vw', transform:'translateY(1.6vw)'}}></img>
                <span className="trader-title">NFT TRADER</span>
            </div>
            <div className="searcher-container-h" style={searchFocusState ? {borderBottom: '1px solid #329DFF'} : {borderBottom: '1px solid #FFFFFF'}}>
              <input className="searcher" onBlur={() => searchFocusHandler(false)} onFocus={() => searchFocusHandler(true)}  type='text' placeholder="Search items, collections, and accounts"></input>
              <div style={{width:'5%', display:'inline-block', cursor:'pointer'}}>
              <img src={lupita} ></img>
              </div>
            </div>
            <div style={{display:'flex', transform:'translateX(-5%)'}}>
                <a className="header-opt" >Marketplace</a>
                <a className="header-opt">Ranking</a>
                <a className="header-opt">Blog</a>
            </div>
            <div style={{transform:'translateX(2vw)'}}>
                <a><img className="header-logo" src={astronaut}></img></a>
                <a><img className="header-logo" src={cart}></img></a>
                <a><img onClick={() => setUserHandler(!props.userModeOn)} className="header-logo" src={profile}></img></a>
            </div>
            </div>
        </div>
         <div style={{display:'flex', justifyContent:'center', backgroundColor:'#073662'}}>
            <img style={{width:'94%'}} src={monkeysHeader}></img>
         </div>
         </div>
       
    )
}




export default Header