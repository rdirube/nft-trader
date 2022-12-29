import React, { useState } from "react";
import "./items.css"
import refresh from '../../../../assets/images/refresh.png'
import tick from '../../../../assets/images/tick.png'
import { useEffect } from "react";
import monkeysAvaiable from "./itemsList";
import pc from '../../../../assets/images/monkey_1.png'




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
                                <div className="card">
                                    <div className="card-img-container">
                                        <img className="img" src={monkey.picture}></img>
                                    </div>
                                    <div className="card-info-f-container">
                                        <div className="card-info-container">
                                            <div className="info-section">
                                                <span className="info-text">MONKEEZ <img style={{ width: '1vw' }} src={tick}></img></span>
                                            </div>
                                            <div className="info-section" style={{ marginBottom: '0.5vw' }}>
                                                <span>MONKEEZ {monkey.name} </span>
                                            </div>
                                            <div className="info-section" style={{ marginBottom: '0.2vw' }}>
                                                <span className="info-text"> {monkey.lastSold === '-' ? '' : 'Last Sold'}</span>
                                                <span className="info-text">Price</span>
                                            </div>
                                            <div className="info-section">
                                                <span style={{ color: 'white' }}>{monkey.lastSold === '-' ? '' : monkey.lastSold}</span>
                                                <span style={{ color: 'white' }}>{monkey.price}</span>
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