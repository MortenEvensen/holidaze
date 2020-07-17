import React from 'react';
import Heading from "../layout/Headings";
import HomeInfo from "./HomeInfo";


export function Home() {
    return (
    	<>
    	<div className="bg-wrap">
    		<div className="background-image">	
    		  <Heading title="" />
    		  <HomeInfo />
            </div>
    	</div>		
        </>
    );
}

export default Home;