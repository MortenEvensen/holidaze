import React from "react";
import { Link } from "react-router-dom";

function HomeSpecificHotel({ id, name, image, description, price }) {
	return (
		<>
            <Link to={"hotel/" + id}>
                <div className="homeSearchWrap">
                    <img alt={name} src={image}/>
                    <h3>{name}</h3>   
                </div>
            </Link>
        </>
	)
}

export default HomeSpecificHotel