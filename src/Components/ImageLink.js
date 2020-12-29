import React, {useState} from 'react';

const ImageLink = (props) => {
    return(
		<>
			<a href={props.src}> <img src={props.src} alt={props.linktext} height={props.height}/> </a>
        </>
    );
}

export default ImageLink;