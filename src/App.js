import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {AuthService, UserInfoService} from './service';
import UserComponent from './component/UserComponent';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

const Sandwiches = () => <h2>Sandwiches</h2>;

const Tacos = ({routes}) => (
    <div>
        <h2>Tacos</h2>
        <ul>
            <li><Link to="/tacos/bus">Bus</Link></li>
            <li><Link to="/tacos/cart">Cart</Link></li>
        </ul>

        {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route}/>
        ))}
    </div>
);

const Bus  = () => <h3>Bus</h3>;
const Cart = () => <h3>Cart</h3>;

const routes = [
    {
        path     : '/sandwiches',
        component: Sandwiches
    },
    {
        path     : '/tacos',
        component: Tacos,
        routes   : [
            {
                path     : '/tacos/bus',
                component: Bus
            },
            {
                path     : '/tacos/cart',
                component: Cart
            }
        ]
    }
];

const RouteWithSubRoutes = (route) => (
    <Route path={route.path} render={props => (
        <route.component {...props} routes={route.routes}/>
    )}/>
);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        console.log(props);
    }

    handleLogin() {
        return AuthService.login().then(res => {
            if (!res) return;
            return UserInfoService.setUserInfo(res);
        })
    }

    render() {
        return (
            <Router>
                <div>
                    <div className="App">
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo"/>
                            <h1 className="App-title">Welcome to React</h1>
                        </header>
                        <button onClick={this.handleLogin.bind(this)}>Login</button>
                    </div>
                    <ul>
                        <li><Link to="/tacos">Tacos</Link></li>
                        <li><Link to="/sandwiches">Sandwiches</Link></li>
                    </ul>

                    {routes.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route}/>
                    ))}
                    <UserComponent/>
                </div>
            </Router>
        );
    }
}

export default App;
