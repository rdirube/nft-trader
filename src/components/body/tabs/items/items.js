import React, { useState } from "react";
import "./items.css"
import refresh from '../../../../assets/images/refresh.png'
import tick from '../../../../assets/images/tick.png'
import { useEffect } from "react";
import monkeysAvaiable from "./itemsList";
import symbol1 from '../../../../assets/images/certificate_03.png'
import symbol2 from '../../../../assets/images/certificate_02.png'
import itemFramework from '../../../../assets/images/item_NFT.png'


function Items() {

    const [monkeysToShow, setMonkeysToShow] = useState([])

    useEffect(() => {
        let monkeysModified = shuffleAndCutArray(monkeysAvaiable);
        setMonkeysToShow(monkeysModified)
    }, []);



    function shuffleAndCutArray(monkeysAvaiable) {
        const monkeysToShow = [];
        const shuffledMonkeys = monkeysAvaiable.sort(function () {
            return Math.random() - 0.5;
        });
        const numberToCutArray = (Math.random() * monkeysAvaiable.length) + 1;
        for (let i = 0; i < numberToCutArray; i++) {
            monkeysToShow.push(shuffledMonkeys[i])
        }
        return monkeysToShow
    }


    return (
        <div className="items-f-container" >
            <div className="items-container">
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                    <div className="listed-options">
                        <select className="list-option" name="select-1">
                            <option selected value="" hidden>Recently Listed</option>
                            <option value="value1">Option 1</option>
                        </select>
                    </div>
                    <div>
                        <span style={{ marginRight: '10px', fontSize: '1vw' }}>Updated 30min ago</span><img style={{ transform: 'translateY(0.2vw)' }} src={refresh}></img>
                    </div>
                </div>
                <div className="cards-f-container">
                    <div className="cards-container" > {
                        monkeysToShow.map(monkey => {
                            return (<div className="card-container">
                                
                                <img className="item-framework" src={itemFramework}>
                                </img>
                                <div className="card">
                                    <div className="card-img-container">
                                        <img className="img" src={monkey.picture}></img>
                                    </div>
                                    <div className="card-info-f-container">
                                        <div className="card-info-container">
                                            <div className="info-section">
                                                <div>
                                                    <span className="info-text">MONKEEZ <img style={{ width: '1vw' }} src={tick}></img></span>
                                                </div>
                                                <div>
                                                    <img style={{width:'1.2vw'}} src={symbol2}></img>
                                                </div>
                                            </div>
                                            <div className="info-section" style={{ marginBottom: '0.1vw' }}>
                                                <span style={{fontSize:'1.3vw'}}>MONKEEZ {monkey.name} </span>
                                            </div>
                                            <div className="info-section" style={{ marginBottom: '0.2vw' }}>
                                                <div>
                                                {
                                                    monkey.lastSold !== '-' && 
                                                    <div>
                                                   <span className="info-text">Last Sold</span>
                                                    </div>
                                                }  
                                                </div>                                                
                                                <div>
                                                <span className="info-text">Price</span>
                                                </div>                                           
                                            </div>
                                            <div className="info-section">
                                            <div>
                                            {
                                               monkey.lastSold !== '-' &&  
                                                <div>  
                                                      <img className="symbol-image" src={symbol1}></img>
                                                    <span style={{ color: 'white' }}>{monkey.lastSold}</span>
                                                </div>                              
                                            }
                                              </div>
                                               <div>
                                                    <img className="symbol-image" src={symbol1}></img>
                                                    <span style={{ color: 'white' }}>{monkey.price}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>);
                        })
                    }

                    </div>
                </div>
            </div>
        </div>




    )

}



export default Items