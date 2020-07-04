import React from "react"; 


export default function Search({ handleSearch }) {
	return (
		<>
			<input type="text" placeholder="search hotel by name" onChange={event => handleSearch(event)} />
		</>
	)
}