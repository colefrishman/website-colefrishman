import React from 'react';

const DVD = () => {
    return(
    <marquee direction={"down"} behavior={"alternate"} height={"100%"} scrollamount={25}>
        <marquee behavior={"alternate"} width={"100%"} scrollamount={25}>
           <div style={{"font-size": "4rem", "font-family": 'Segoe UI'}}><b>DVD</b></div>
        </marquee>
    </marquee>
    );
}

export default DVD