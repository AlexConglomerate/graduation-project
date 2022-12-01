import NavBar from "./component/navBar";
import {Route, Switch} from "react-router-dom";
import Schedule1 from "./component/schedule1";
import Home from "./component/home";
import Vacation from "./component/vacation";


function App() {
    return (
        <div>
            <NavBar/>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/schedule' component={Schedule1}/>
                <Route path='/vacation' component={Vacation} />
                {/*<Route path='/posts/:postId?' component={Posts} />*/}
                {/*<Route path="/404" component={NotFound} />*/}
                {/*<Redirect from="/admin" to="/dashboard" />*/}
                {/*<Redirect to="/404" />*/}
            </Switch>
        </div>

    );
}


export default App;
