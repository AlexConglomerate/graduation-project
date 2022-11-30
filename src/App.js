import NavBar from "./component/navBar";
import {Route, Switch} from "react-router-dom";
import Schedule from "./component/schedule";
import Home from "./component/home";


function App() {
    return (
        <div>
            <NavBar/>
            <hr/>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/schedule' component={Schedule}/>
                {/*<Route path='/login' component={Login} />*/}
                {/*<Route path='/posts/:postId?' component={Posts} />*/}
                {/*<Route path="/404" component={NotFound} />*/}
                {/*<Redirect from="/admin" to="/dashboard" />*/}
                {/*<Redirect to="/404" />*/}
            </Switch>
        </div>

    );
}


export default App;
