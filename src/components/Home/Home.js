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
            navBar:[],
            homeScoll:[]
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
            // console.log(this.state.navBar)
        })
        axios.get('https://www.fkgou.com/mallms/wap/home/mobconfig/query?mbTplLayoutId=103').then(res=>{
            // console.log(res.data);
            this.setState({
                homeScoll:res.data.data.mbTplLayoutDatas
            })
            console.log(this.state.homeScoll)
        })
    }
    render(){
        return (
            <div id="bigbox">
                <div className="homeBigTop">
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
                    <dl className="homeNavBar">
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
                    <img src="https://www.fkgou.com/wap/images/20190126193550.gif" alt="" className="newImg"/>
                    <div className="homeWidth">
                        <div className="fyys">
                            <span>今日特惠</span>
                            <span>想你所想,如你所愿</span>
                            <i className="iconfont icon-jiantou2"></i>
                        </div>
                        <div className="homeScoll">
                            <dl>
                                {
                                    this.state.homeScoll.map(item=>{
                                        return (
                                            <dt key={item.goodsId}>
                                                <img src={item.goodsImage} alt=""/>
                                                <p>{item.goodsName}</p>
                                                <span>￥{item.goodsPrice}</span>
                                                <span>￥{item.goodsMarketPrice}</span>
                                            </dt>
                                        )
                                    })
                                }
                            </dl>
                        </div>
                    </div>
                </div>
                <TabBar/>
            </div>
        )
    }
}
export default Home;