import React, { Component } from 'react';
import '../../sass/bigCenter.scss';
import '../../sass/Home.scss';
import '../../plugins/icon/iconfont.css';
import TabBar from '../TabBar'
import { Carousel } from 'antd-mobile';

import axios from 'axios';
class Home extends Component {
    constructor(){
        super();
        this.state= {
            Carousel:[],
            navBar:[]
        }
    }
    componentWillMount(){
        axios.get('https://www.fkgou.com/mallms/wap/home/mobconfig/query?mbTplLayoutId=97').then(res=>{
            // console.log(res.data);
            this.setState({
                Carousel:res.data.data.mbTplLayoutDatas
            })
        })
        axios.get('https://www.fkgou.com/mallms/wap/home/mobconfig/query?mbTplLayoutId=102').then(res=>{
            // console.log(res.data);
            this.setState({
                navBar:res.data.data.mbTplLayoutDatas
            })
            console.log(this.state.navBar)
        })
    }
    render(){
        return (
            <div id="bigbox">
                <div className="bigTop">
                    <span className="iconfont icon-saoyisao spanOne"></span>
                    <span className="spanTwo">
                        <span>
                            <i className="iconfont icon-guanbi"></i>
                            搜索您想要的产品
                        </span>
                    </span>
                    <span className="iconfont icon-xiaoxi1 spanThr"></span>
                </div>
                <div className="bigCenter">
                    <Carousel
                        autoplay={true}
                        infinite
                    >
                        {
                            this.state.Carousel.map(item=>{
                                return (
                                    <div key={item.imageName}>
                                        <img src={item.image} alt=""/>
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                    <dl className="navBar">
                        {
                            this.state.navBar.map(item=>{
                                return (
                                    <dt key={item.imageName}>
                                        <img src={item.image} alt=""/>
                                        <span>{item.imageName}</span>
                                    </dt>
                                )
                            })
                        }
                    </dl>
                    <div>adasdasdsa</div>
                </div>
                <TabBar/>
            </div>
        )
    }
}
export default Home;