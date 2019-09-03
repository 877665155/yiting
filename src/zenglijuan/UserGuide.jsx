/* jshint esversion: 6 */
import React, { Component, Fragment } from 'react';
import "./UserGuide.css";
import "./iconfont.css";
import "./dibuhetoubu.css";
import creatHistory from 'history/createBrowserHistory';
const history = creatHistory();
export default class UserGuide extends Component {
    constructor() {
        super();
        this.headleback.bind(this);
    }
    headleback() {
        history.goBack();
    }
    render() {
        return (
            <div id="UserGuide">
                <header>
                    <div className="headContent clearfix">
                        <a onClick={this.headleback}><i className="iconfont icon-arrow-left"></i>返回</a>
                        <span>用户指南</span>
                        {/* <!-- <i href="zaixianzixun.html"><i className="iconfont icon-xiaoxi"></i></a> --> */}
                    </div>
                </header>
                <section>
                    <div className="question">
                        <h1>常见问题</h1>
                        <p>Q:如何使用易停交停车费</p>
                        <p className="second"><span>• 扫码付费</span>&nbsp;&nbsp;点击扫码付费—>扫描停车卡上的二维码—>确认订单消息—>选择支付方式并支付—>结束订单。</p>
                        <p className="second"><span>•
                    二维码付费</span>&nbsp;&nbsp;（适用于车牌识别车场）扫描停车场内张贴的二维码缴费牌—>输入车牌号—>点击“去交费”—>选择支付方式并支付—>在预留出场时间内出场；</p>
                        <p>您也可以“我的车辆”中提前绑定您的车牌，当您进入停车场时，系统会自动检测到您的停车状态。出场时，无需扫码，直接结束支付结束订单即可，离场。</p>
                        <h2>注：易停暂不支持路边停车交费</h2>
                        <p className="first">Q:车位遇到故障怎么办？</p>
                        <p className="second"><span>•
                    结束订单</span>如果遇到车位故障无法打开，如果时间紧急，您可以点击结束当前订单，马上寻找新的空闲车位，您也可以将故障车位反馈给客服，我们收到反馈会第一时间与您取得联系，反馈故障会给予您一定的积分奖励，谢谢您的支持！
                        </p>
                        <h3></h3>
                        <p>Q:订单问题?</p>
                        <p className="second"><span>• 无法获取订单</span>&nbsp;&nbsp;易停停车交费依赖停车场，若停车场网络出现异常会导致订单获取失败。</p>
                        <p className="second"><span>• 移动支付后出场仍提示需要交费</span>&nbsp;&nbsp;请您务必提前支付停车费，如到达出口时再支付，可能由于网络延迟导致出口仍要求需要现金交费的情况；
                如您遇到该问题请您提供您的支付凭证给停车场保安，若保安仍要求现场交费，请缴纳现金后提交意见反馈给我们，易停和停车场核对订单收费情况后，会为您办理退款。</p>
                        <h4></h4>
                    </div>
                </section>
            </div>

        )
    }

}