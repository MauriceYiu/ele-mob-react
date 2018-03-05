import React, { Component } from 'react';
import './navHeader.scss';

class NavHeader extends Component {
    render() {
        return (
            <div>
                <div id="nav-header">
                    <span className="logo">ele.me</span>
                    <span className="me">Me</span>
                </div>
                <div style={{width:"100%",height:"5rem",display:'block'}}></div>
            </div>

        );
    }
}

export default NavHeader;