import React, {} from 'react';
import { Switch, Route } from 'react-router-dom';
import PageNotFound from './Pages/PageNotFound'
import Home from './Pages/Home'
import DVD from './Pages/DVD'
import ImgVids from './ImgVids/ImgVids';
import WhensMelee from './WhensMelee/WhensMelee';
import Portfolio from './Pages/Portfolio/Portfolio';
import JewOnChristmas from './JewOnChristmas/JewOnChristmas';


const reload = () => window.location.reload();
const Main = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/home' component={Home}/>
      <Route path='/dvd' component={DVD}/>
      <Route path='/imgvids' component={ImgVids}/>
      <Route path='/whensmelee' component={WhensMelee}/>
      <Route path='/portfolio' component={Portfolio}/>
      <Route path='/AlachuaCovidInfographic.html' onEnter={reload}/>
      <Route path='/jewonchristmas' component={JewOnChristmas}/>
      <Route path='/jewonchristmas.html' component={JewOnChristmas}/>
      <Route path='/TwitterBannerGraphic.png' onEnter={reload}/>
      <Route component={PageNotFound}/>
    </Switch>
  );
}



export default Main;
