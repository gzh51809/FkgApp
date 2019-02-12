import React, { Component } from 'react';
import '../../sass/bigCenter.scss';
import '../../sass/Detail.scss';
import { Carousel } from 'antd-mobile';
import axios from 'axios';
class Mine extends Component {
    constructor(){
        super();
        this.state = {
            detTab:[
                {
                    name:'商品'
                },{
                    name:'详情'
                },{
                    name:'评价'
                }
            ],
            active:0,
            banner:[],
            goodsBases:[],
            shopDetail:[],
            gdsCommon:[],
            commonId:[],
            Scale:[]
        }
        this.goback = this.goback.bind(this);
        this.TabSwitch = this.TabSwitch.bind(this);
    }
    componentWillMount(){
        // console.log(this.props)
        const goodsId = ((this.props.location.pathname).split('/')[2]).split(',')[0];
        const commonsId = ((this.props.location.pathname).split('/')[2]).split(',')[1];
        console.log(goodsId,commonsId)
        // 发起ajax请求
        // 商品内容
        axios({
            method:'post',
            url:'https://www.fkgou.com/mallms/wap/detail/goodsid/query',
            data:{
                goodsId,
            }
        }).then(res=>{
            console.log('商品内容',res.data.data)
            this.setState({
                // 轮播图片
                banner:res.data.data.goodsImages,
                // 内容
                goodsBases:res.data.data.goodsBases,
                // 商家信息
                shopDetail:res.data.data.shopDetail,
                // 规格
                gdsCommon:res.data.data.gdsCommon,
            })
        }).catch(err=>{
            console.log(err);
        })
        // 商品详情图片
        axios({
            method:'get',
            url:'https://www.fkgou.com/mallms/wap/detail/desc/query',
            params:{
                commonsId,
            }
        }).then(res=>{
            // 详情图片
            const str = (res.data.data.commonBody).split('<p>"</p>')[1];
            // const arr = str.split()
            this.setState({
                commonId:str,
            })
            console.log('commonsId',this.state.commonId)
        }).catch(err=>{
            console.log(err);
        })
        // 商品推荐
        axios({
            method:'post',
            url:'https://www.fkgou.com/mallms/app/home/userfoot/query',
            data:{
                "token":"",
                "currentPage":1,
                "pageSize":6
            }
        }).then(res=>{
            console.log('商品推荐',res.data.data)
            this.setState({
                Scale:res.data.data
            })
        }).catch(err=>{
            console.log(err);
        })
    }
    goback(){
        this.props.history.goBack()
    }
    TabSwitch(idx){
        this.setState({
            active:idx
        })
    }
    render(){
        return (
            <div id="bigbox">
                <div className="detailTop">
                    <span className="iconfont icon-jiantouarrowhead7" onClick={this.goback}></span>
                    <ul className="detailTab">
                        {
                            this.state.detTab.map((item,idx)=>{
                                return (
                                    <li key={item.name} className={this.state.active === idx ? 'detLi' : ''} onClick={()=>{this.TabSwitch(idx)}}>{item.name}</li>
                                )
                            })
                        }
                    </ul>
                    <span>
                        <i className="iconfont icon-fenxiang"></i>
                        <i className="iconfont icon-gengduo"></i>
                    </span>
                </div>
                <div className="bigCenter">
                    <div className={this.state.active === 0 ? 'detShow' : 'detHide'} id="detCenter">
                        <Carousel
                            autoplay={true}
                            infinite
                        >
                            {
                                this.state.banner.map((item,idx)=>{
                                    return (
                                        <div key={idx}>
                                            <img src={item.imagesImage} alt=""/>
                                        </div>
                                    )
                                })
                            }
                        </Carousel>
                        <div className="detPrice">
                            <span>￥{this.state.goodsBases.goodsPrice}</span>
                            <span><del>￥{this.state.goodsBases.goodsMarketPrice}</del></span>
                            <span>销量{this.state.goodsBases.goodsSalenum}</span>
                            <p>{this.state.goodsBases.goodsName}</p>
                        </div>
                        <div className="detDiC">
                            <div className="detDiCDiv">
                                <span>领券</span>
                                <span className="detDiCColor">店铺优惠券</span>
                                <span className="iconfont icon-gengduo"></span>
                            </div>
                            <p></p>
                            <div className="detDiCDiv">
                                <span>送至</span>
                                <span>江西省赣州市青龙镇赤江村大山排</span>
                                <span className="iconfont icon-gengduo"></span>
                            </div>
                            <div className="detDiCDiv detDiCSpeci">
                                <span>规格</span>
                                <span>{this.state.goodsBases.goodsSpec}</span>
                                <span className="iconfont icon-gengduo"></span>
                            </div>
                        </div>
                        <div className="detShop">
                            <ul>
                                <li>
                                    <img src={this.state.shopDetail.shopLogo} alt=""/>
                                    <span>{this.state.shopDetail.shopName}</span>
                                    <span>综合评分:&nbsp;&nbsp;&nbsp;<span>{this.state.shopDetail.overallScore}</span>&nbsp;&nbsp;分</span>
                                </li>
                                <li>
                                    <ul>
                                        <li>
                                            <span>{this.state.shopDetail.shopCount}</span>
                                            <span className="detShopSpan">全部商品</span>
                                        </li>
                                        <li>
                                            <span>{this.state.shopDetail.shopCollect}</span>
                                            <span className="detShopSpan">全部关注</span>
                                        </li>
                                        <li>
                                            店铺资质信息
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span>联系商家</span>
                                    <span>进店逛逛</span>
                                </li>
                            </ul>
                        </div>
                        <div className="detImg" dangerouslySetInnerHTML={{__html:this.state.commonId}}></div>
                        <div className="detScale">
                            <span>为您推荐</span>
                            <ul>
                                {
                                    this.state.Scale.map(item=>{
                                        return (
                                            <li key={item.goodsId}>
                                                <img src={item.commonImage} alt=""/>
                                                <span>{item.commonName}</span>
                                                <span>￥{item.commonPrice}</span>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className={this.state.active === 1 ? 'detShow' : 'detHide'}>
                        <div className="detImg" dangerouslySetInnerHTML={{__html:this.state.commonId}}></div>
                    </div>
                    <div className={this.state.active === 2 ? 'detShow' : 'detHide'}>我是评价</div>
                </div>
                <div className="detailBottom">
                    <ul>
                        <li>
                            <span><i className="iconfont icon-tianchongxing-"></i>购物车</span>
                            <span><i className="iconfont icon-kefu"></i>客服</span>
                            <span><i className="iconfont icon-shoucang"></i>收藏</span>
                        </li>
                        <li>
                            <span>加入购物车</span>
                            <span>立即购买</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Mine;