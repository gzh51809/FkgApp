import React, { Component } from 'react';
import '../../sass/bigCenter.scss';
import TabBar from '../../components/TabBar'
class Classity extends Component {
    render(){
        return (
            <div id="bigbox">
                <div className="bigCenter">这是分类</div>
                <TabBar/>
            </div>
        )
    }
}
export default Classity;