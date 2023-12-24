import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';



/*<form onSubmit={this.handleSubmit}>
<label>
  Pick your favorite flavor:
  <select value={this.state.value} onChange={this.handleChange}>
	<option value="grapefruit">Grapefruit</option>
	<option value="lime">Lime</option>
	<option value="coconut">Coconut</option>
	<option value="mango">Mango</option>
  </select>
</label>
<input type="submit" value="Submit" />
</form>*/

const MapSearch = (props) => {

	
	let q = props.query.split(' ');
	let search = q[0];

	for (let i=1; i<q.length; ++i){
		search = search + "+" + q[i]
	}

	if(search.slice(-4) === "+in+"){
		search += "New York City"; 
	}

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

const TwoMaps = (props) => {
	const location = props.location;

	return (
		<>
			<MapSearch id="chinesefood" query={`chinese food in ${location} open christmas`} title="Chinese Food"/>
			<MapSearch id="movietheater" query={`movie theater in ${location} open christmas`} title="Movie Theaters"/>
		</>
	)
}

const JewOnChristmas = () => {
	const [location, setLocation] = useState("");
	//const [locationSet, setLocationSet] = useState(false);

	const display = () => {
    	return(
    	    <center>
				<h1>A Jew On Christmas</h1>
   				<TextField id="standard-basic" label="Location" defaultValue="New York City" onChange={(val) => setLocation(val.target.value)} />
				<TwoMaps location={location}/>
    	    </center>
		);
	}
	
	return display()
}

export default JewOnChristmas;