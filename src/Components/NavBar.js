import { Button, Menu, MenuItem, Link } from "@material-ui/core"
import React, { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu';

const NavBar = (props) => {
	const [menuAnchorEl, setMenuAnchorEl] = useState(null);
	const menuOpened = Boolean(menuAnchorEl);

	const handleClick = (event) => {
		setMenuAnchorEl(event.currentTarget);
	}

	const handleClose = () => {
		setMenuAnchorEl(null);
	};

	return(
	<div>
		<Menu id="fade-menu"
			open={menuOpened} 
        	anchorEl={menuAnchorEl} 
			onClose={handleClose}
			keepMounted
			>

			<MenuItem ><Link href="/whensmelee">When's Melee?</Link></MenuItem>
			<MenuItem ><Link href="/imgvids">IMG #### video finder</Link></MenuItem>
			<MenuItem ><Link href="/dvd">DVD</Link></MenuItem>
		</Menu>
		<h3 style={{display:"inline", marginLeft: "auto", marginRight: "auto", width: "50%"}}><Link href="/">Cole Frishman</Link></h3>
		<Button onClick={handleClick}><MenuIcon/>Toys</Button>
	</div>
	);
}

export default NavBar;