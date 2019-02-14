import React, { Component } from 'react';
import '../../sass/bigCenter.scss';
import '../../sass/Cart.scss';
import TabBar from '../../components/TabBar'
class Cart extends Component {
    constructor(){
        super();
        this.state={
            active:true
        }
    }
    render(){
        return (
            <div id="bigbox">
                <div className="CartTop"></div>
                <div className="bigCenter CartCenter">
                    <ul className="CartUl">
                        <div>
                            <span className="CartCheck"></span>
                            <span></span>
                            <span>张家港市特产自营店</span>
                            <span></span>
                        </div>
                        <li className="CartLi">
                            <span className="CartCheck"><i className={"iconfont icon-gou"+(this.state.active ?' CartI':'')}></i></span>
                            <img src="https://image.fkgou.com//image.php/shop/data/upload/media/fe27be6c8c0091aa6eb9ab4188e2477e/549722/156036/image/20181103/1541209550629057.jpg" alt=""/>
                            <div>
                                <span>超值辣条香辣美味黑椒牛排门店自取</span>
                                <span>¥0.18</span>
                                <span>规格:70g</span>
                                <span>-</span>
                                <span>1</span>
                                <span>+</span>
                            </div>
                        </li>
                    </ul>
                    <ul className="CartUl">
                        <div>
                            <span className="CartCheck"></span>
                            <span></span>
                            <span>江南好食品旗舰店</span>
                            <span></span>
                        </div>
                        <li className="CartLi">
                            <span className="CartCheck"></span>
                            <img src="https://image.fkgou.com//image.php/shop/data/upload/media/fe27be6c8c0091aa6eb9ab4188e2477e/249538/155797/image/20180510/1525922981926860.jpg" alt=""/>
                            <div>
                                <span>超值辣条香辣美味黑椒牛排门店自取</span>
                                <span>¥0.18</span>
                                <span>规格:70g</span>
                                <span>-</span>
                                <span>1</span>
                                <span>+</span>
                            </div>
                        </li>
                        <li className="CartLi">
                            <span className="CartCheck"></span>
                            <img src="https://image.fkgou.com//image.php/shop/data/upload/media/fe27be6c8c0091aa6eb9ab4188e2477e/249538/155797/image/20180510/1525922981926860.jpg" alt=""/>
                            <div>
                                <span>超值辣条香辣美味黑椒牛排门店自取</span>
                                <span>¥0.18</span>
                                <span>规格:70g</span>
                                <span>-</span>
                                <span>1</span>
                                <span>+</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="CartBottom"></div>
                <TabBar/>
            </div>
        )
    }
}
export default Cart;