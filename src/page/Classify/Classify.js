import React, { Component } from 'react';
import '../../sass/bigCenter.scss';
import '../../sass/Classify.scss';
import TabBar from '../../components/TabBar'
import TopSearch from '../../components/TopSearch';

import axios from 'axios';
class Classity extends Component {
    constructor(){
        super();
        this.state = {
            leftList:[],
            rightList:[],
            current:0,
        }
        this.goto = this.goto.bind(this);
        this.gotolist = this.gotolist.bind(this);
    }
    goto(idx,id){
        this.setState({
            current:idx,
        })
        axios.get('https://www.fkgou.com/mallms/wap/goods/itemcat/query?catParentId='+id).then(res=>{
            // console.log(res.data.data[0].gdsCats)
            this.setState({
                rightList:res.data.data
            })
            console.log('rightList',this.state.rightList)
        })
        // console.log(123,idx,id);
    }
    gotolist(id){
        // id = (id.split(':')[1]).split('}')[0];
        console.log(id,123);
        this.props.history.push('/list/'+id)
    }
    componentWillMount(){
        axios.get('https://www.fkgou.com/mallms/wap/goods/itemcat/query?catParentId=0').then(res=>{
            // console.log(res.data.data[0].gdsCats)
            this.setState({
                leftList:res.data.data[0].gdsCats
            })
            // console.log('leftList',this.state.leftList)
        })
        axios.get('https://www.fkgou.com/mallms/wap/goods/itemcat/query?catParentId=1000').then(res=>{
            // console.log(res.data.data[0].gdsCats)
            this.setState({
                rightList:res.data.data
            })
            console.log('rightList',this.state.rightList)
        })
    }
    render(){
        return (
            <div id="bigbox">
                <TopSearch/>
                <div className="bigCenter classifyTop">
                    <div className="ClassifyLeft">
                        <dl className="ClearfixDl">
                            {
                                this.state.leftList.map((item,idx)=>{
                                    return (
                                        <dt key={idx} className={this.state.current === idx ? 'ClassifyShow':''} onClick={()=>{this.goto(idx,item.catId)}}>
                                            <span className={this.state.current === idx ? 'ClassifyShowBC':''}></span>
                                            <span className={this.state.current === idx ? 'ClassifyShowColor':''}>{item.catName}</span>
                                        </dt>
                                    )
                                })
                            }
                        </dl>
                    </div>
                    <div className="ClassifyRight">
                        <dl className="ClearfixDl">
                            {
                                this.state.rightList.map(item=>{
                                    return(
                                        <dt key={item.secordCatId}>
                                            <div className="btys ClassifyBtys">
                                                <span></span>
                                                <span>{item.secordCatName}</span>
                                                <span></span>
                                            </div>
                                            <dl className="clearfix ClearfixDl">
                                                {
                                                    item.gdsCats.map(items=>{
                                                        return (
                                                            <dt className="ClassifyDt" key={items.catId} onClick={()=>{this.gotolist(items.catId)}}>
                                                                <img src={items.catPic} alt=""/>
                                                                <span>{items.catName}</span>
                                                            </dt>
                                                        )
                                                    })
                                                }
                                            </dl>
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
export default Classity;