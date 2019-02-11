import React, { Component } from 'react';
import '../../sass/bigCenter.scss';
import TabBar from '../../components/TabBar';
import '../../sass/Mine.scss';
class Mine extends Component {
    render(){
        return (
            <div id="bigbox">
                <div className="bigCenter">
                    <div className="MineTop"></div>
                </div>
                <TabBar/>
            </div>
        )
    }
}
export default Mine;