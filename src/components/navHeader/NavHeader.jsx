import React, { Component } from 'react';
import './navHeader.scss';

class NavHeader extends Component {
    constructor(props){
        super(props);
        this.state={};
        this.goback = this.goback.bind(this);
    }
    render() {
        if (this.props.children) {
            return (
                <div>
                    <div id="nav-header">
                        {this.props.showBack?(<span className="arrow-left" onClick={this.goback}>{'<'}</span>):''}
                        <span className="tit">{this.props.cityNameTit}</span>
                        {this.props.children}
                    </div>
                    <div style={{ width: "100%", height: "5rem", display: 'block' }}></div>
                </div>
            );
        } else {
            return (
                <div>
                    <div id="nav-header">
                        <span className="logo">ele.me</span>
                        <span className="me">Me</span>
                    </div>
                    <div style={{ width: "100%", height: "5rem", display: 'block' }}></div>
                </div>
            );
        }

    }
    componentDidMount() {
        //
    }
    goback(){
        this.props.routerFun.goBack(-1);
    }
}

export default NavHeader;