import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';

class Tab extends Component{
    constructor(){
        super();
        this.state = {
            TabBar:[
                {
                    text:'首页',
                    path:'/home',
                    name:'Home',
                    icon:'home'
                },{
                    text:'分类',
                    path:'/list',
                    name:'List',
                    icon:'bars'
                },{
                    text:'消息',
                    path:'/home',
                    name:'Home',
                    icon:'users'
                },{
                    text:'购物车',
                    path:'/cart',
                    name:'Cart',
                    icon:'shopping-cart'
                },{
                    text:'我的',
                    path:'/mine',
                    name:'Mine',
                    icon:'home'
                }
            ],
            selectedTab: 'redTab',
            hidden: false,
            fullScreen: false,
        }
    }
    render(){
        return (
            <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
                <TabBar
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
                                key={item.text}
                                icon={<div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
                                />
                                }
                                
                                >   
                                </TabBar.Item>
                            )
                        })
                    }
                </TabBar>
            </div>
        );
    }
}

export default Tab;