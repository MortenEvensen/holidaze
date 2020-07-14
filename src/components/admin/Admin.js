import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";
import Contact from "./Contact";
import Enquires from "./Enquires";
import CreateEstablishment from "./CreateEstablishment";


function Admin() {

	return (
		<Router>	
            <NavLink to="/contact" className="nav-link-2">
                Contact-messages
            </NavLink>
            <NavLink to="/enquires" className="nav-link-2">
                Enquiries
            </NavLink>
            <NavLink to="/createEstablishment" className="nav-link-2">
                Create Establishment
            </NavLink>
        	<Switch>    
                <Route path="/contact" exact component={Contact} />
                <Route path="/enquires" exact component={Enquires} />
                <Route path="/createEstablishment" exact component={CreateEstablishment} />   
            </Switch>

   		</Router>
	)
}

export default Admin;