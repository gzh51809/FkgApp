import React, { Component } from 'react';
import '../../sass/bigCenter.scss';
import '../../sass/Home.scss';
import '../../plugins/icon/iconfont.css';
import TabBar from '../../components/TabBar';
import TopSearch from '../../components/TopSearch';
import { Carousel } from 'antd-mobile';

import axios from 'axios';
class Home extends Component {
    constructor(){
        super();
        this.state= {
            Carousel:[],
            navBar:[],
            homeScoll:[],
            goodShop:[],
            goodGoods:[],
            dfgoods:[],
            xxgoods:[],
            rpgoods:[],
            lygoods:[],
            sxgs:[],
            teabal:[],
            zb:[],
            // cnxh:[]
        }
        this.gotolist = this.gotolist.bind(this)
        this.gotodetail = this.gotodetail.bind(this)
    }
    componentWillMount(){
        axios.get('https://www.fkgou.com/mallms/wap/home/mobconfig/query?mbTplLayoutId=97').then(res=>{
            // console.log(res.data);
            this.setState({
                Carousel:res.data.data.mbTplLayoutDatas
            })
            // console.log(this.state.Carousel);
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
            // console.log(this.state.homeScoll)
        })
        axios.get('https://www.fkgou.com/mallms/wap/home/mobconfig/query?mbTplLayoutId=105').then(res=>{
            // console.log(res.data);
            this.setState({
                goodShop:res.data.data.mbTplLayoutDatas
            })
            // console.log(this.state.goodShop)
        })
        axios.get('https://www.fkgou.com/mallms/wap/home/mobconfig/query?mbTplLayoutId=106').then(res=>{
            // console.log(res.data);
            this.setState({
                goodGoods:res.data.data.mbTplLayoutDatas
            })
            // console.log(this.state.goodGoods)
        })
        axios.get('https://www.fkgou.com/mallms/wap/home/mobconfig/query?mbTplLayoutId=107').then(res=>{
            // console.log(res.data);
            this.setState({
                dfgoods:res.data.data.mbTplLayoutDatas
            })
            // console.log(this.state.dfgoods)
        })
        axios.get('https://www.fkgou.com/mallms/wap/home/mobconfig/query?mbTplLayoutId=108').then(res=>{
            // console.log(res.data);
            this.setState({
                xxgoods:res.data.data.mbTplLayoutDatas
            })
            // console.log(this.state.xxgoods)
        })
        axios.get('https://www.fkgou.com/mallms/wap/home/mobconfig/query?mbTplLayoutId=109').then(res=>{
            // console.log(res.data);
            this.setState({
                rpgoods:res.data.data.mbTplLayoutDatas
            })
            // console.log(this.state.rpgoods)
        })
        axios.get('https://www.fkgou.com/mallms/wap/home/mobconfig/query?mbTplLayoutId=110').then(res=>{
            // console.log(res.data);
            this.setState({
                lygoods:res.data.data.mbTplLayoutDatas
            })
            // console.log(this.state.lygoods)
        })
        axios.get('https://www.fkgou.com/mallms/wap/home/mobconfig/query?mbTplLayoutId=111').then(res=>{
            // console.log(res.data);
            this.setState({
                sxgs:res.data.data.mbTplLayoutDatas
            })
            // console.log(this.state.sxgs)
        })
        axios.get('https://www.fkgou.com/mallms/wap/home/mobconfig/query?mbTplLayoutId=112').then(res=>{
            // console.log(res.data);
            this.setState({
                teabal:res.data.data.mbTplLayoutDatas
            })
            // console.log(this.state.teabal)
        })
        axios.get('https://www.fkgou.com/mallms/wap/home/mobconfig/query?mbTplLayoutId=113').then(res=>{
            // console.log(res.data);
            this.setState({
                zb:res.data.data.mbTplLayoutDatas
            })
            // console.log(this.state.zb)
        })
        // axios.get('https://www.fkgou.com/mallms/wap/home/mobconfig/query?mbTplLayoutId=106').then(res=>{
        //     // console.log(res.data);
        //     this.setState({
        //         cnxh:res.data.data.mbTplLayoutDatas
        //     })
        //     // console.log(this.state.cnxh)
        // })
    }
    gotolist(id){
        id = (id.split(':')[1]).split('}')[0];
        console.log(id,123);
        this.props.history.push('/list/'+id)
    }
    gotodetail(commonId,id){
        const str = id+','+commonId
        console.log(str)
        this.props.history.push('/detail/'+str)
    }
    render(){
        return (
            <div id="bigbox">
                <TopSearch/>
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
                                    <dt key={item.imageName} onClick={()=>{this.gotolist(item.imageData)}}>
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
                            <span>把最好的都给你</span>
                            <i className="iconfont icon-jiantou2"></i>
                        </div>
                        <div className="homeScoll">
                            <dl>
                                {
                                    this.state.homeScoll.map(item=>{
                                        return (
                                            <dt key={item.goodsId} onClick={()=>{this.gotodetail(item.commonId,item.goodsId)}}>
                                                <img src={item.goodsImage} alt=""/>
                                                <p>{item.goodsName}</p>
                                                <span>￥{item.goodsPrice}</span>
                                                <del>￥{item.goodsMarketPrice}</del>
                                            </dt>
                                        )
                                    })
                                }
                            </dl>
                        </div>
                    </div>
                    <div className="homeWidth">
                        <div className="fyys">
                            <span>发现好店</span>
                            <span>想你所想,如你所愿</span>
                        </div>
                        <div className="goodShop">
                            <dl>
                                {
                                    this.state.goodShop.map(item=>{
                                        return (
                                            <dt key={item.shopName} onClick={()=>{this.gotodetail(item.commonId,item.imageList[0].goodsId)}}>
                                                <img src={item.image} alt=""/>
                                            </dt>
                                        )
                                    })
                                }
                            </dl>
                        </div>             
                    </div>
                    <div className="homeWidth">
                        <div className="fyys">
                            <span>品牌好货</span>
                            <span>大品牌,有保障</span>
                            <i className="iconfont icon-jiantou2"></i>
                        </div>
                        <div className="goodGoods">
                            <dl>
                                {
                                    this.state.goodGoods.map(item=>{
                                        return (
                                            <dt key={item.imageData}>
                                                <img src={item.image} alt=""/>
                                            </dt>
                                        )
                                    })
                                }
                            </dl>
                        </div>
                    </div>
                    <div className="homeWidth">
                        <div className="btys">
                            <span></span>
                            <span>地方特产</span>
                            <span></span>
                        </div>
                        <dl className="homeShop clearfix">
                            {
                                this.state.dfgoods.map(item=>{
                                    return (
                                        <dt key={item.goodsId} onClick={()=>{this.gotodetail(item.commonId,item.goodsId)}}>
                                            <img src={item.goodsImage} alt=""/>
                                            <p>{item.goodsName}</p>
                                            <span>￥{item.goodsPrice}</span>
                                            <span>销量{item.goodsSalenum}</span>
                                        </dt>
                                    )
                                })
                            }
                        </dl>
                    </div>
                    <div className="homeWidth">
                        <div className="btys">
                            <span></span>
                            <span>休闲食品</span>
                            <span></span>
                        </div>
                        <dl className="homeShop clearfix">
                            {
                                this.state.xxgoods.map(item=>{
                                    return (
                                        <dt key={item.goodsId} onClick={()=>{this.gotodetail(item.commonId,item.goodsId)}}>
                                            <img src={item.goodsImage} alt=""/>
                                            <p>{item.goodsName}</p>
                                            <span>￥{item.goodsPrice}</span>
                                            <span>销量{item.goodsSalenum}</span>
                                        </dt>
                                    )
                                })
                            }
                        </dl>
                    </div>
                </div>
                <TabBar/>
            </div>
        )
    }
}
export default Home;