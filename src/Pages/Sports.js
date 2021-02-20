import React from 'react';
import ImageLink from '../Components/ImageLink';
import NavBar from '../Components/NavBar';

const Sports = () => {
    return(
        <div style={{marginRight: "10%", marginLeft: "10%", marginTop:"2%"}}>
            <NavBar />
            <h1 id="football">
                Football
            </h1>
            <ImageLink src="/sports/GoFor2.png" alt="Go for 2" height="100%"/>
            <hr />
            <ImageLink src="/sports/SECBowlTieIns.png" alt="SEC Bowl Tie-ins" height="100%" />
            <hr />
            <h1 id="baseball">
                Baseball
            </h1>
            <ImageLink src="/sports/OffsetPitching.png" alt="Offset Pitching" height="100%" />
        </div>
    );
}

export default Sports;