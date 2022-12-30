import React ,  {useState} from "react";
import monkey from '../../../assets/images/monkey_1.png'
import copy from '../../../assets/images/copy.png'
import './user-profile.css'
import lupita from '../../../assets/images/lupita_2.png'
import refresh from '../../../assets/images/refresh.png'


function UserProfile() {

    const [searchFocusState, searchFocusHandler] = useState(false);


    return (
        <div className="user-profile-container">
            <div className="profile-pic-container">
                <img style={{ width: '10vw' }} src={monkey}></img>
            </div>
            <div className="profile-part-1">
                <div className="profile-part-1-info">
                    <div>
                        <span className="username" >User Profile</span>
                    </div>
                    <div>
                        <span style={{ fontSize: '0.85vw' }}>0xc97...34f8</span> <img src={copy} style={{ width: '1vw', marginLeft: '5px', cursor: 'pointer', transform:'translateY(0.2vw)' }}></img>
                    </div>
                    <div>
                        <span style={{ fontSize: '0.85vw' }}>Joined October 2022</span>
                    </div>
                </div>
            </div>
            <div className="profile-part-2">
                <div className="search-container-user">
                    <div>
                        <select className="list-option" name="select-1">
                            <option selected value="" hidden>Recently Listed</option>
                            <option value="value1">Option 1</option>
                        </select>
                    </div>
                    <div className="searcher-container-user" style={searchFocusState ? { borderBottom: '1px solid orange' } : { borderBottom: '1px solid #329DFF' }}>
                        <input type='text' onBlur={() => searchFocusHandler(false)} onFocus={() => searchFocusHandler(true)} className="user-searcher" placeholder="Search"></input>
                        <div style={{ width: '5%', height: '100%', display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
                            <img style={{ width: '1.3vw', height: '1.3vw', cursor: 'pointer' }} src={lupita}></img>
                        </div>
                    </div>
                </div>
                <div className="update-time-container">
                     <div style={{transform:'translateX(-3vw)'}}>
                     <span style={{ marginRight: '10px', fontSize: '1vw' }}>Updated 30min ago</span><img style={{ transform: 'translateY(0.2vw)' }} src={refresh}></img>
                     </div>
                </div>
            </div>
        </div>
    )
}



export default UserProfile