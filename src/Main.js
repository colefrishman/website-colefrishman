import React, {} from 'react';
import { Switch, Route } from 'react-router-dom';
import PageNotFound from './Pages/PageNotFound';
import Home from './Pages/Home';
import ImgVids from './ImgVids/ImgVids';
import WhensMelee from './WhensMelee/WhensMelee';
import GIS3001 from './Pages/GIS3001';
import JewOnChristmas from './JewOnChristmas/JewOnChristmas';
import Sports from './Pages/Sports';
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';
import Tools from './Pages/Tools';

const reload = () => window.location.reload();
const Main = () => {
return (
	<Switch>
		<Route exact path='/' component={Home}/>
		<Route exact path='/home' component={Home}/>
		<Route path='/contact' component={Contact}/>
		<Route path='/imgvids' component={ImgVids}/>
		<Route path='/whensmelee' component={WhensMelee}/>
		<Route path='/gis3001' component={GIS3001}/>
		<Route path='/sports' component={Sports}/>
		<Route path='/portfolio' component={Portfolio}/>
		<Route path='/tools' component={Tools}/>
		<Route path='/AlachuaCovidInfographic.html' onEnter={reload}/>
		<Route path='/jewonchristmas' component={JewOnChristmas}/>
		<Route path='/dvd.html' onEnter={reload}/>
		<Route component={PageNotFound}/>
	</Switch>
);
}

export default Main;
