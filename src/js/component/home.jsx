import React, {useState, useEffect} from "react";

//create your first component
const Home = () => {

	const [ count, setCount] = useState(1);
	
	useEffect(()=>{
		const intervalID = setInterval(()=>{
				if(count< 4){
					setCount((count)=>count + 1);
				}else{
					setCount(1);
				}
		},3000);
		return () => {
			clearInterval(intervalID)
		}
	  },[count])

	
	if (count == 1){
	return (
		<div id="app">
			<div>
				<div id="trafficTop"></div>
				<div id="container">
					<div class="red light selected"></div>
					<div class="yellow light"></div>
					<div class="green light"></div>
				</div>
			</div>
		</div>
	)
	}
	else if (count == 2){
		return (
			<div id="app">
				<div>
					<div id="trafficTop"></div>
					<div id="container">
						<div class="red light"></div>
						<div class="yellow light selected"></div>
						<div class="green light"></div>
					</div>
				</div>
			</div>
		)
	}
	else {
		return (
			<div id="app">
				<div>
					<div id="trafficTop"></div>
					<div id="container">
						<div class="red light"></div>
						<div class="yellow light"></div>
						<div class="green light selected"></div>
					</div>
				</div>
			</div>
		)
	};
};

export default Home;
