import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return(
        <div style={{marginRight: "10%", marginLeft: "10%", marginTop:"2%"}}>
            <h1 style={{marginRight: "auto", marginLeft: "auto", textAlign: "center"}}>
                Cole Frishman
            </h1>
            <p><b>
                GIS3001C Portfolio
            </b></p>
            <ul>
                <li>Here is an <a href="/AlachuaCovidInfographic.html">Infographic</a> that tracks COVID in Alachua County, based on a template</li>
                <li>I also made three story maps based on assignments in the class:
                    <ul>
                        <li><a href="https://ufl.maps.arcgis.com/apps/Cascade/index.html?appid=41ea29e71c3c436cbc897c1ce6f47fe4">Cascade</a> for San Diego, CA</li>
                        <li><a href="https://ufl.maps.arcgis.com/apps/MapJournal/index.html?appid=68611c6317ae46ff90ef2f6cf12db752">Journal</a> for San Diego, CA</li> 
                        <li><a href="https://ufl.maps.arcgis.com/apps/MapTour/index.html?appid=4cc2b56084754014b9c89d2a2bf95a69">Tour</a> for The Strand in Los Angeles County, California</li> 
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default Portfolio