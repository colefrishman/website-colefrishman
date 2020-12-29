import React, {} from 'react';
import { Switch, Route } from 'react-router-dom';
import PageNotFound from './Pages/PageNotFound'
import Home from './Pages/Home'
import DVD from './Pages/DVD'
import ImgVids from './ImgVids/ImgVids';
import WhensMelee from './WhensMelee/WhensMelee';
import GIS3001 from './Pages/GIS3001';
import JewOnChristmas from './JewOnChristmas/JewOnChristmas';
import Football from './Pages/Football';


const reload = () => window.location.reload();
const Main = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/home' component={Home}/>
      <Route path='/dvd' component={DVD}/>
      <Route path='/imgvids' component={ImgVids}/>
      <Route path='/whensmelee' component={WhensMelee}/>
      <Route path='/gis3001' component={GIS3001}/>
      <Route path='/football' component={Football}/>
      <Route path='/AlachuaCovidInfographic.html' onEnter={reload}/>
      <Route path='/jewonchristmas' component={JewOnChristmas}/>
      <Route component={PageNotFound}/>
    </Switch>
  );
}



export default Main;
