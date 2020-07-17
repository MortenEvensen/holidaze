import React from "react";
import { Link } from "react-router-dom";

function HotelSpecific({ id, name, image, description, price, guest }) {
	return (
		<>
		<Link to={"hotel/" + id}>
			<div className="hotel-wrap">
        		<div className="image-wrap">
        			<img alt={name} src={image}/>
        		</div>
        		<div className="text-wrap">
        			<h2 className="bold">{name}</h2>
        			<p>{description}</p>
        			<p><span className="bold">Price: </span>{price}$</p>   			
        		</div>
        	</div>
        </Link>
		</>
	)
}

export default HotelSpecific;