import React from "react";
import EnquiresApi from "./EnquiresApi";


function Enquires() {
	return (
		<>
		<div className="admin-header">
			<h1>Admin page</h1>
			<h2>Enquires:</h2>
		</div>
		<EnquiresApi />
		</>
	)
}

export default Enquires;