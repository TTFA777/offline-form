
import React from 'react';
import Home from './Home';
import Navigate from './Navigate';
import Create from './Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LeadDetails from './LeadDetails';


const App = () => {
    return(
        <div className="App">
        <Navigate/>
        <div className='content'>
        <Router>
            <Switch>
                <Route path="/Home">
                <Home/>
                </Route>
                <Route path="/create">
                <Create/>
                </Route>
                <Route path="/leadinfo/:id">
                <LeadDetails/>
                </Route>
            </Switch>
        </Router>
        </div>
        </div>
    );
}
export default App;