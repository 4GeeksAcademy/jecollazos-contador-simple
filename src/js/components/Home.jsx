import React from "react";
import Contador from "./Contador.jsx";

//create your first component
const Home = (props) => {
	return (
		<div className="text-center">
            <Contador seconds={props.seconds}/>
		</div>
	);
};

export default Home;