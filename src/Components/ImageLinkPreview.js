import React, {useState} from 'react';

const ImageLinkPreview = (props) => {
	const [visible, setVisibile] = useState(false)

	const toggleVisibility = () => {
		setVisibile(!visible)
	}

	const getStyle = () => {
		if (visible) {
			return {"visibility":"visible", "cursor": "pointer"}
		}
		else{
			return {"visibility":"hidden", "height":0, "cursor": "pointer"}
		}
	}

    return(
		<>
			<a href={props.src}>{props.linktext}</a>
			<p onClick={() => {toggleVisibility()}} style={{"color":"red"}}> (view preview)</p>
			<br style={getStyle()} />
			<a href={props.src}> <img src={props.src} alt={props.linktext} style={getStyle()} height={props.height}/> </a>
        </>
    );
}

export default ImageLinkPreview