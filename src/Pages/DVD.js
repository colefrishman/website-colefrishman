import React from 'react';

const DVD = () => {
    return(
    <marquee direction={"down"} behavior={"alternate"} height={"100%"} scrollamount={20}>
        <marquee behavior={"alternate"} width={"100%"} scrollamount={20}>
           <div style={{"font-size": "36px", "font-family": 'Segoe UI'}}><b>DVD</b></div>
        </marquee>
    </marquee>
    );
}

export default DVD