import React from "react";
import { SecondsCounter } from "./secondscounter.jsx";
import PropTypes from "prop-types";



//create your first component
const Home = (props) => {
	return (
		<div className="text-center d-flex">
			<SecondsCounter img={<i class="fa-regular fa-clock fs-1"></i>}/>
			<SecondsCounter unidad={Math.floor((props.seconds/100000)%10)}/>
			<SecondsCounter unidad={Math.floor((props.seconds/10000)%10)}/>
			<SecondsCounter unidad={Math.floor((props.seconds/1000)%10)}/>
			<SecondsCounter unidad={Math.floor((props.seconds/100))%10}/>
			<SecondsCounter unidad={Math.floor((props.seconds/10)%10)}/>
			<SecondsCounter unidad={Math.floor((props.seconds)%10)}/>

		</div>
	);
};

Home.propTypes={
	seconds: PropTypes.number,
}

export default Home;
