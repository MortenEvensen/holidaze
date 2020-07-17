import React from "react";
import CreateEstablishment from "./CreateEstablishment";


function Establishments() {

	return (
		<>
		<div className="admin-header">
			<h1>Admin page</h1>
			<h2>Create new establishment:</h2>
		</div>
		<CreateEstablishment />
		</>
	)
}

export default Establishments;