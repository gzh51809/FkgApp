import React, { Component } from 'react';

import {Route,Switch,Redirect,withRouter} from 'react-router-dom';
import './common.scss';
import './sass/TabBar.scss'
// import { TabBar } from 'antd-mobile';
import Home from './components/Home/Home';
import Classity from './components/Classify/Classify';
import News from './components/News/News';
import Cart from './components/Cart/Cart';
import Mine from './components/Mine/Mine';

class App extends Component{
    constructor(){
        super();
        this.state = {
            TabBar:[
                {
                    text:'首页',
                    path:'/home',
                    name:'Home',
                    icon:'home',
                    color:'blueTab'
                },{
                    text:'分类',
                    path:'/classity',
                    name:'Classity',
                    icon:'bars',
                    color:'redTab'
                },{
                    text:'消息',
                    path:'/news',
                    name:'News',
                    icon:'users',
                    color:'greenTab'
                },{
                    text:'购物车',
                    path:'/cart',
                    name:'Cart',
                    icon:'shopping-cart',
                    color:'yellowTab'
                },{
                    text:'我的',
                    path:'/mine',
                    name:'Mine',
                    icon:'home',
                    color:'pinkTab'
                }
            ],
            current:'/home',
        }
    }
    render(){
        return (
            <div id="superBox">
                <Switch>
                        <Route path="/home" component={Home}/>
                        <Route path="/classity" component={Classity}/>
                        <Route path="/mine" component={Mine}/>
                        <Route path="/cart" component={Cart}/>
                        <Route path="/news" component={News}/>
                        <Redirect from="/" to="/home"/>
                </Switch>
			</div>
        );
    }
}
App = withRouter(App);

export default App;
