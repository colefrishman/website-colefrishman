import { Button } from "@material-ui/core"
import React, { } from 'react'

const ToggleDarkMode = (darkMode) => {
	if(darkMode){
		document.body.style.backgroundColor = "white"
		document.body.style.color = "black"
		document.getElementById("dark-toggle").innerText = "Dark Mode"
	}
	else{
		document.body.style.backgroundColor = "black"
		document.body.style.color = "white"
		document.getElementById("dark-toggle").innerText = "Light Mode"
	}
}

const DarkModeButton = (props) => {
	
	return (
		<Button style={{float: "right", display:"inline"}} onClick={() => ToggleDarkMode(document.body.style.backgroundColor === "black")} variant="contained" color="default" id="dark-toggle">Dark Mode</Button>
	)
}

export default DarkModeButton