import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import {withRouter} from 'react-router-dom';
import '../sass/TabBar.scss'


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
            selectedTab: '/home',
            hidden: false,
        }
    }
    componentDidMount(){

        // 利用生命周期函数来保持当前路由高亮
        // 获取当前路由（hash,history）
        let hash = window.location.hash;// 可能得到的值：/home,/list,/list/computer
        hash = hash.split('/')[1];

        this.setState({
            current:'/'+hash,
            selectedTab:'/'+hash
        })

    }
    render(){
        // console.log('App:',this)
        return (

                <div id="BottomBar">
                    <TabBar
                    onClick={this.props.handleChange}
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
                    noRenderContent="true"
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
                                        selected={this.state.selectedTab === item.path}
                                        onPress={() => {
                                            this.setState({
                                                selectedTab: item.path,
                                            });
                                            this.props.history.push(item.path)
                                        }}
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
Tab = withRouter(Tab);
export default Tab;