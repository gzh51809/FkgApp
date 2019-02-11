import React, { Component } from 'react';

import {Route,Switch,Redirect,withRouter} from 'react-router-dom';
import './common.scss';
import './sass/TabBar.scss'
// import { TabBar } from 'antd-mobile';
import Home from './page/Home/Home';
import Classity from './page/Classify/Classify';
import News from './page/News/News';
import Cart from './page/Cart/Cart';
import Mine from './page/Mine/Mine';
import List from './page/List/List';
import Detail from './page/Detail/Detail';

class App extends Component{
    render(){
        return (
            <div id="superBox">
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/classity" component={Classity}/>
                    <Route path="/mine" component={Mine}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/news" component={News}/>
                    <Route path="/list" component={List}/>
                    <Route path="/detail" component={Detail}/>
                    <Redirect from="/" to="/home"/>
                </Switch>
			</div>
        );
    }
}
App = withRouter(App);

export default App;
