import React, { Component } from 'react';
import '../../sass/bigCenter.scss';
import TabBar from '../TabBar'
class Cart extends Component {
    render(){
        return (
            <div id="bigbox">
                <div className="bigCenter">这是购物车</div>
                <TabBar/>
            </div>
        )
    }
}
export default Cart;