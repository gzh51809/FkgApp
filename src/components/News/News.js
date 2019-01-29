import React, { Component } from 'react';
import '../../sass/bigCenter.scss';
import TabBar from '../TabBar'
class News extends Component {
    render(){
        return (
            <div id="bigbox">
                <div className="bigCenter">这是消息</div>
                <TabBar/>
            </div>
        )
    }
}
export default News;