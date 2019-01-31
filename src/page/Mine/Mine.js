import React, { Component } from 'react';
import '../../sass/bigCenter.scss';
import TabBar from '../../components/TabBar'
class Mine extends Component {
    render(){
        return (
            <div id="bigbox">
                <div className="bigCenter">这是我的</div>
                <TabBar/>
            </div>
        )
    }
}
export default Mine;