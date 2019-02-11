import React, { Component } from 'react';
import '../../sass/bigCenter.scss';
// import '../../sass/Mine.scss';
import axios from 'axios';
class Mine extends Component {
    componentWillMount(){
        console.log(this.props)
        const goodsId = (this.props.location.pathname).split('/')[2];
        console.log(goodsId)
        // 发起ajax请求
        axios({
            method:'post',
            url:'https://www.fkgou.com/mallms/wap/detail/goodsid/query',
            data:{
                goodsId,
            }
        }).then(res=>{
            console.log(res.data.data)
        }).catch(err=>{
            console.log(err);
        })
        axios({
            method:'post',
            url:'https://www.fkgou.com/mallms/app/home/userfoot/query',
            data:{
                "token":"",
                "currentPage":1,
                "pageSize":6
            }
        }).then(res=>{
            console.log(res.data.data)
        }).catch(err=>{
            console.log(err);
        })
    }
    render(){
        return (
            <div id="bigbox">
                <div className="bigCenter">
                    我是详情页
                </div>
            </div>
        )
    }
}
export default Mine;