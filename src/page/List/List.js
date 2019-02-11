import React, { Component } from 'react';
import '../../sass/bigCenter.scss';
import '../../sass/List.scss';
import axios from 'axios';
class List extends Component {
    constructor(){
        super();
        this.state={
            listTab:[
                {
                    name:'综合',
                    currentPage:1,
                    orderType:3,
                    priceOrder: "",
                    pageSize:20,
                    saleNum:""
                },{
                    name:'销量',
                    currentPage:1,
                    orderType:2,
                    priceOrder: "",
                    pageSize:20,
                    saleNum:1
                },{
                    name:'价格',
                    currentPage:1,
                    orderType:1,
                    priceOrder: 2,
                    pageSize:20,
                    saleNum:1
                },{
                    name:'筛选'
                }
            ],
            current:0,
            catId:0,
            priceOrder:2,
            list:[]
        }
        this.goback = this.goback.bind(this);
        this.goto = this.goto.bind(this);
    }
    goback(){
        this.props.history.goBack()
    }
    goto(idx,item){
        // console.log(item)
        this.setState({
            current:idx
        })
        this.refs.price.innerHTML = '价格'
        if(item.name === '筛选'){
            console.log('赛选')
        }else{
            // console.log(1323);
            if(item.priceOrder){
                if(this.state.priceOrder === 2){
                    // console.log('升序');
                    this.setState({
                        priceOrder:1
                    },()=>{
                        this.refs.price.innerHTML = '价格▲'
                        console.log(this.refs.price.innerHTML)
                    })
                }else{
                    // console.log('降序')
                    this.setState({
                        priceOrder:2
                    },()=>{
                        this.refs.price.innerHTML = '价格▼'
                        console.log(this.refs.price.innerHTML)
                    })
                }
                // console.log(this.state.priceOrder)
                axios({
                    method:'post',
                    url:'https://www.fkgou.com/mallms/wap/shoplist/query/filter',
                    data:{
                        catId:this.state.catId,
                        commonName: "",
                        currentPage: 1,
                        maxPrice: "",
                        minPrice: "",
                        orderType: item.orderType,
                        pageSize: 20,
                        priceOrder: this.state.priceOrder,
                        saleNum: item.saleNum,
                        shopSelfSupport: ""
                    }
                }).then(res=>{
                    // console.log(res.data.data)
                    this.setState({
                        list:res.data.data
                    })
                    console.log('price',this.state.list)
                }).catch(err=>{
                    console.log(err);
                })
            }else{
                axios({
                    method:'post',
                    url:'https://www.fkgou.com/mallms/wap/shoplist/query/filter',
                    data:{
                        catId:this.state.catId,
                        commonName: "",
                        currentPage: 1,
                        maxPrice: "",
                        minPrice: "",
                        orderType: item.orderType,
                        pageSize: 20,
                        priceOrder: "",
                        saleNum: item.saleNum,
                        shopSelfSupport: ""
                    }
                }).then(res=>{
                    // console.log(res.data.data)
                    this.setState({
                        list:res.data.data
                    })
                    console.log('list',this.state.list)
                }).catch(err=>{
                    console.log(err);
                })
            }
        }
    }
    componentWillMount(){
        // console.log(this.props)
        const catId = (this.props.location.pathname).split('/')[2];
        this.setState({
            catId
        })
        // console.log(catId)
        // 发起ajax请求
        axios({
            method:'post',
            url:'https://www.fkgou.com/mallms/wap/shoplist/query/filter',
            data:{
                catId,
                commonName: "",
                currentPage: 1,
                maxPrice: "",
                minPrice: "",
                orderType: 3,
                pageSize: 20,
                priceOrder: "",
                saleNum: "",
                shopSelfSupport: ""
            }
        }).then(res=>{
            console.log(res.data.data)
            this.setState({
                list:res.data.data
            })
        }).catch(err=>{
            console.log(err);
        })
    }
    render(){
        return (
            <div id="bigbox">
                <div id="listTop">
                    <div className="homeBigTop">
                        <span className="iconfont icon-jiantouarrowhead7 spanOne" onClick={this.goback}></span>
                        <span className="spanTwo">
                            <span>
                                <i className="iconfont icon-guanbi"></i>搜索您想要的产品
                            </span>
                        </span>
                        <span className="iconfont icon-xiaoxi1 spanThr"></span>
                    </div>
                    <div className="listTab">
                        <ul className="listTabUl">
                            {
                                this.state.listTab.map((item,idx)=>{
                                    return (
                                        <li key={idx} ref={item.name === '价格'?'price':''} className={this.state.current === idx ? 'ListTab':''} onClick={()=>{this.goto(idx,item)}}>{item.name}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="bigCenter">
                    <ul>
                        {
                            this.state.list.map(item=>{
                                return (
                                    <li key={item.commonId} className="listLi">
                                        <img src={item.commonImage} alt=""/>
                                        <div className="listLiRight">
                                            <span>{item.commonName}</span>
                                            <span>￥{item.commonPrice}</span>
                                            <span>原价￥{item.commonMarketPrice}</span>
                                            <span>销量{item.commonSalenum}</span>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
export default List;