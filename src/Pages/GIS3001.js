import React from 'react';
import ImageLinkPreview from '../Components/ImageLinkPreview'

const GIS3001 = () => {
    return(
        <div style={{marginRight: "10%", marginLeft: "10%", marginTop:"2%"}}>
            <h1 style={{marginRight: "auto", marginLeft: "auto", textAlign: "center"}}>
                GIS 3001C - Spatial Maps and Graphs
            </h1>
            <p><b>
                Design
            </b></p>
            <ul>
                <li><ImageLinkPreview src="/gis3001/TwitterBannerGraphic.png" linktext="Twitter Banner Graphic" height="200px" /></li>
                <li><ImageLinkPreview src="/gis3001/GatorsTypingMask.png" linktext="Gators Typing Mask" height="200px" /></li>
                <li><ImageLinkPreview src="/gis3001/Monogram.png" linktext="Monogram" height="200px" /></li>
                <li><ImageLinkPreview src="/gis3001/PortfolioCover.png" linktext="Portfolio Cover" height="200px" /></li>
            </ul>
            <p><b>
                Maps
            </b></p>
            <ul>
                <li><ImageLinkPreview src="/gis3001/ContinentsWaterColorMap.png" linktext="Water color Map of the world" height="200px" /></li>
                <li><ImageLinkPreview src="/gis3001/DisasterTrends.png" linktext="Historical disaster trends in the U.S." height="200px" /></li>
                <li><ImageLinkPreview src="/gis3001/Massachusetts.png" linktext="Map of Massachusetts" height="200px" /></li>
                <li><ImageLinkPreview src="/gis3001/ReligionChoropleth.png" linktext="Choropleth map of religion in the U.S." height="200px" /></li>
            </ul>
        </div>
    );
}

export default GIS3001