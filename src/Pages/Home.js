import React from 'react';
import githubLogo from '../res/github.png';

const Home = () => {
    return(
        <div style={{marginRight: "10%", marginLeft: "10%", marginTop:"2%"}}>
            <h1 style={{marginRight: "auto", marginLeft: "auto", textAlign: "center"}}>
                Cole Frishman
            </h1>
            <p><b>
                There's not much on this page, but why don't you check out some cool things that I made!
            </b></p>
            <ul>
                <li><a href="/whensmelee">When's Melee</a> is a tool that you can use to find upcoming tournaments for the video game <a href="https://en.wikipedia.org/wiki/Super_Smash_Bros._Melee#Professional_competition"> Super Smash Bros. Melee.</a> The results are automatic, and pull data from <a href="https://smash.gg">Smash.gg</a></li>
                <li><a href="/imgvids">IMG #### Video Finder</a> is a tool that will show a random youtube video starting with the words "IMG" and followed by a 4-digit number. This is an implementation of an idea at 19:35 in <a href="https://www.youtube.com/watch?v=9l5C8cGMueY&t=1175">this</a> video from SBNation's Jon Bois. I recommend watching the full video if you have time!</li>
                <li>My <a href="https://play.google.com/store/apps/developer?id=Cole+Frishman">Google Play Store Page</a> has a few Android Apps that I've made. Some of these include: <a href="https://play.google.com/store/apps/details?id=colefrishman.wobblingsimulator">Melee Wobbling Simulator</a> and <a href="https://play.google.com/store/apps/details?id=colefrishman.colormetronome">Color Metronome</a>.</li>
                <li>I made a <a href="https://en.wikipedia.org/wiki/Brainfuck">Brainf**k</a> interpreter which you can find on npm <a href="https://www.npmjs.com/package/brainfk-interpreter">here.</a></li>
                <li>I have <a href="/gis3001">some maps and graphs</a> of things I made for a GIS Class</li>
                <li>I also have some <a href="/football">football stuff</a></li> 
                <li>You can check out my <a href="https://github.com/colefrishman"><img src={githubLogo} height="12" width="12" alt=""/> GitHub account</a> to see anything else that I may be working on.</li> 
            </ul>
            <p>
                If you need anything, you can contact me at info@colefrishman.com or on <a href="https://www.linkedin.com/in/cole-frishman-229952180/">linkedin</a>
            </p>
        </div>
    );
}

export default Home