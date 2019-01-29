import React, { Component } from 'react';
import '../../sass/bigCenter.scss';
import TabBar from '../TabBar'
class Home extends Component {
    render(){
        return (
            <div id="bigbox">
                <div className="bigCenter">这是首页</div>
                <TabBar/>
            </div>
        )
    }
}
export default Home;