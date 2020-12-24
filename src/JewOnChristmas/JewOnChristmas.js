import React from 'react';

const MapSearch = (props) => {
	let q = props.query.split(' ');
	let search = q[0];

	for (let i=1; i<q.length; ++i){
		search = search + "+" + q[i]
	}
	console.log(search)
	return(
		<span>
			<h2>{props.title}</h2>
			<iframe
				title={props.id}
				width="600"
				height="450"
				frameBorder="0"
				style={{"border":0}}
				src={`https://www.google.com/maps/embed/v1/search?key=${process.env.REACT_APP_MAPS_CHRISTMAS_API_KEY}&q=${search}&zoom=12`}>
			</iframe>
		</span>
	)
}

const JewOnChristmas = () => {
    return(
        <div>
			<h1>A Jew On Christmas</h1>
			<MapSearch id="chinesefood" query="chinese food near me" title="Chinese Food Places"/>
			<MapSearch id="movietheater" query="movie theater near me" title="Movie Theaters"/>
        </div>
    );
}

export default JewOnChristmas