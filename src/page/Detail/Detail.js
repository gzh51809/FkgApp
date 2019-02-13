import React, { Component } from 'react';
import '../../sass/bigCenter.scss';
import '../../sass/Detail.scss';
import { Carousel ,Modal} from 'antd-mobile';
import axios from 'axios';
function closest(el, selector) {
    const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
    while (el) {
        if (matchesSelector.call(el, selector)) {
            return el;
        }
        el = el.parentElement;
    }
    return null;
}
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
            Scale:[],
            modal2: false,
            textActive:'',
            modelActive:0,
            number:1,
            idx:0
        }
        this.goback = this.goback.bind(this);
        this.TabSwitch = this.TabSwitch.bind(this);
        this.changeModelIdx = this.changeModelIdx.bind(this);
        this.gotodetail = this.gotodetail.bind(this);
    }
    showModal = (key,num) => (e) => {
        e.preventDefault(); // 修复 Android 上点击穿透
        this.setState({
          [key]: true,
          idx:num
        });
        console.log('num',num);
    }
    onClose = key => () => {
        this.setState({
            [key]: false,
        });
    }

    onWrapTouchStart = (e) => {
        // fix touch to scroll background page on iOS
        if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
            return;
        }
        const pNode = closest(e.target, '.am-modal-content');
        if (!pNode) {
            e.preventDefault();
        }
    }
    componentWillMount(){
        // console.log(this.props)
        const goodsId = ((this.props.location.pathname).split('/')[2]).split(',')[0];
        const commonsId = ((this.props.location.pathname).split('/')[2]).split(',')[1];
        console.log('hash',goodsId,commonsId)
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
                gdsCommon:res.data.data.gdsCommon.commonSpecValueList,
                // 规格的长度,为了高亮最后一个
                modelActive:res.data.data.gdsCommon.commonSpecValueList.length-1,
                // 规格内容
                textActive:res.data.data.goodsBases.goodsSpec
            })
            console.log('modelActive',this.state.modelActive)
            console.log('gdsCommon',this.state.gdsCommon)
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
    gotodetail(commonId,id){
        const str = id+','+commonId
        console.log(str)
        // this.props.history.push('/detail/'+str)
    }
    goback(){
        this.props.history.goBack()
    }
    TabSwitch(idx){
        this.setState({
            active:idx
        })
    }
    changeModelIdx(idx){
        let text = this.state.gdsCommon[idx].goodsSpec;
        this.setState({
            modelActive:idx,
            textActive : text
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
                            <div className="detDiCDiv detDiCSpeci" onClick={this.showModal('modal2',0)}>
                                <span>规格</span>
                                <span>{this.state.textActive}</span>
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
                                            <li key={item.goodsId} onClick={()=>{this.gotodetail(item.commonId,item.goodsId)}}>
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
                        <li onClick={this.showModal('modal2',1)}>
                            <span>加入购物车</span>
                            <span>立即购买</span>
                        </li>
                    </ul>
                </div>
                <Modal
                popup
                visible={this.state.modal2}
                onClose={this.onClose('modal2')}
                animationType="slide-up"
                >
                    <div className="detModel">
                        <div className="detModelTop">
                            <img src={this.state.goodsBases.goodsImage} alt=""/>
                            <span>￥{this.state.goodsBases.goodsPrice}</span>
                            <span>{this.state.goodsBases.goodsName}</span>
                            <span>库存{this.state.goodsBases.goodsMaxSale}</span>
                            <span className="iconfont icon-cha"></span>
                        </div>
                        <div className="detModelCenter">
                            <span>规格</span>
                            <ul className="clearfix">
                                {
                                    this.state.gdsCommon.map((item,idx)=>{
                                        return (
                                            <li key={item.goodsId}>
                                                <span className={this.state.modelActive === idx ?'detModelActive':''} onClick={()=>{this.changeModelIdx(idx)}}>{item.goodsSpec}</span>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="detModelBottom clearfix">
                            <span>数量</span>
                            <ul className="clearfix">
                                <li>-</li>
                                <li>{this.state.number}</li>
                                <li>+</li>
                            </ul>
                        </div>
                        <div className="detBottom">
                            {
                                this.state.idx === 0 ?
                                <div className="detBottomOne">
                                    <span>加入购物车</span>
                                    <span>立即购买</span>
                                </div>:
                                <div className="detBottomTwo">确定</div>
                            }
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}
export default Mine;