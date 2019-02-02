import React, { Component } from 'react';
import '../sass/TopSearch.scss'
class TopSearch extends Component{
    render(){
        return (
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
        )
    }
}
export default TopSearch;