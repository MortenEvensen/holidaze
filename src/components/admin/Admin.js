import React from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";
import Contact from "./Contact";
import Enquires from "./Enquires";


function Admin() {

	return (
		<Router>
			
            <NavLink to="/contact" className="nav-link">
                Contact-messages
            </NavLink>
            <NavLink to="/enquires" className="nav-link">
                Enquires
            </NavLink>


	<Switch>
     
        <Route path="/contact" exact component={Contact} />
        <Route path="/enquires" exact component={Enquires} />
    </Switch>

   		</Router>
	)
}

export default Admin;