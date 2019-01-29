import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import {Route,Switch,Redirect,withRouter} from 'react-router-dom';
import '../sass/TabBar.scss'

import Home from './Home/Home.js'
import Classity from './Classify/Classify.js'
import News from './News/News.js'
import Cart from './Cart/Cart.js'
import Mine from './Mine/Mine.js'
class Tab extends Component{
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
            selectedTab: 'blueTab',
            hidden: false,
        }
    }
    render(){
        // console.log('App:',this)
        return (

            <div>
                <TabBar
                onClick={this.props.handleChange}
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
                hidden={this.state.hidden}
                >
                    {
                        this.state.TabBar.map(item=>{
                            return (
                                    <TabBar.Item
                                    title={item.text}
                                    key={item.path}
                                    icon={<div style={{
                                        width: '22px',
                                        height: '22px',
                                        background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
                                    />
                                    }
                                    selectedIcon={<div style={{
                                        width: '22px',
                                        height: '22px',
                                        background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
                                    />
                                    }
                                    selected={this.state.selectedTab === item.color}
                                    onPress={() => {
                                        this.setState({
                                            selectedTab: item.color,
                                        });
                                        this.props.history.push(item.path)
                                    }}
                                    > 
                                    </TabBar.Item>
                                
                            )
                        })
                    }
                    </TabBar>
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
Tab = withRouter(Tab);
export default Tab;