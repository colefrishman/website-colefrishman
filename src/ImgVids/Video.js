import React, {} from 'react';

const Video = (props) => {

    return(
        <div id="videoDiv">
            <h2 id="vTitle" className="text">{props.title}</h2>
            <iframe id="video" width="640" height="360" title="video" src={props.url} frameBorder="0" allow="encrypted-media; picture-in-picture" allowFullScreen></iframe>
        </div>
    );
}



export default Video