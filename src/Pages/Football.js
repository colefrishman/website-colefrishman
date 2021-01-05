import React from 'react';
import ImageLink from '../Components/ImageLink';
import NavBar from '../Components/NavBar';

const Football = () => {
    return(
        <div style={{marginRight: "10%", marginLeft: "10%", marginTop:"2%"}}>
            <NavBar />
            <h1>
                Football
            </h1>
            <ImageLink src="/football/GoFor2.png" alt="Go for 2" height="100%"/>
            <hr />
            <ImageLink src="/football/SECBowlTieIns.png" alt="Go for 2" height="100%" />
        </div>
    );
}

export default Football;