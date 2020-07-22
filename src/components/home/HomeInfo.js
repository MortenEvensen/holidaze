import React from "react"; 
import HomeSearch from "./HomeSearch";

function HomeInfo() {
return (
	<>
		<div className="home-info-wrap">
			<div className="text-wrap">
				<h2>Find your hotel in Bergen!</h2>
				<p>Bergen has a lot of amazing places to stay!</p>
				<HomeSearch />
			</div>
		</div>		
	</>
	)

}

export default HomeInfo;