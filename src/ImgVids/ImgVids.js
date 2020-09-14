import React, {useState} from 'react';
import Video from './Video'
import Button from '@material-ui/core/Button';
import NavBar from '../Components/NavBar';

const ImgVids = () => {
    const [searchOptions, setSearchOptions] = useState("relevance");
    const [vidUrl, setVidUrl] = useState("https://www.youtube.com/embed/9l5C8cGMueY?start=1176");
    const [vidTitle, setVidTitle] = useState("Credit for the idea:");

    const findVideo = (searchOptions) => {
        let searchType = searchOptions;
        let vidNumber = Math.floor(Math.random()*10000);
        let quer = ""+vidNumber;
        for(var i = 3; i>Math.floor(Math.log10(vidNumber)); --i){
            quer = "0"+quer;
        }
        quer = "IMG " +quer;
        let request = window.gapi.client.youtube.search.list({
          "part": "snippet",
          "type": "video",
          "maxResults": 3,
          "order": searchType,
          "q": quer
        });

        console.log(quer);

        request.execute(function (response){
            let results = response.result;
            let result = results.items[0];
            let url = "https://www.youtube.com/embed/"+result.id.videoId;
            let newTitle = result.snippet.title;
            
            setVidTitle(newTitle)
            setVidUrl(url);
        });
    }

    return(
        <div className = "img-vids">
            <NavBar />
            <center>
                <br />
                <h1 className="text">IMG #### video finder</h1>
                <Button onClick={() => {findVideo(searchOptions)}} style={{backgroundColor:"#FF0000", color:"#FFFFFF", marginRight:"1%"}}>find new video</Button> 
                <select id="searchOptions">
                    <option value="relevance" onSelect={() => {setSearchOptions("relevance")}}>relevant</option>
                    <option value="date" onSelect={() => {setSearchOptions("date")}}>newest</option>
                </select>
            
                <Video url={vidUrl} title={vidTitle}/>
                <script src="./App.js" />
            </center>
        </div>
    );
}

export default ImgVids;