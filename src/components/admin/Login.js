import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import Admin from "../admin/Admin";


class Login extends React.Component {

    state = {
        password:""
    };

  handleChange = (e) =>{
    this.setState({
        password:e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <p>Password:</p>
          < br />
          <input value={this.state.password} onChange={this.handleChange} />
        </label>
          <br /> 
          <p>(The password is "password")</p>
        < br />
        <Router>
             <Link to="/admin">
                 <button disabled={this.state.password !== "password"}>Submit</button>
            </Link>
              < br />
            <Switch>
                <Route path="/admin" exact component={Admin} />
            </Switch>
        </Router>
      </form>
    );
  }
}

export default Login;