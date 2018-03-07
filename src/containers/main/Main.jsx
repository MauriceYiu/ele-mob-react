import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import NavHeader from './../../components/navHeader/NavHeader';
import { getNowCityAddress, getClass } from './../../api/shop';
// import menuImg from './../../static/img/menu.jpeg';
import './main.scss';
import { imgBaseUrl } from './../../api/config';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            geohash: '',
            index: 0,
            title: '',
            menu: [],
            paginationWidth: ''
        };
    }
    handleChangeIndex = index => {
        this.setState({
            index
        });
    };
    render() {
        const { index, menu, paginationWidth } = this.state;
        return (
            <div id="main">
                <NavHeader title={this.state.title} doShowMe={true}>
                    <div className="search">Search</div>
                </NavHeader>
                <div className="swiper-wrap">
                    <SwipeableViews className="slide-wrap" index={index} onChangeIndex={this.handleChangeIndex}>
                        {
                            menu.map((item, menuIndex) => {
                                return (
                                    <div className="slide-item" key={menuIndex}>
                                        <ul>
                                            {
                                                item.map((innerItem, innerIndex) => {
                                                    return (
                                                        <li className="slide-item-li" key={innerIndex}>
                                                            <div className="menu-img">
                                                                <img src={imgBaseUrl + innerItem.image_url} alt="" />
                                                            </div>
                                                            <p className="menu-name">{innerItem.title}</p>
                                                        </li>
                                                    );
                                                })
                                            }
                                        </ul>
                                    </div>
                                );
                            })
                        }
                    </SwipeableViews>
                    <div className="pagination" style={{ 'marginLeft': -(paginationWidth.offsetWidth / 2) }} ref={(e) => { this.pagination = e; }}>
                        <ul>
                            {
                                menu.map((item, menuIndex) => {
                                    return (
                                        <li key={menuIndex} className={index === menuIndex ? 'pagination-item active' : 'pagination-item'}></li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
    componentDidMount() {
        let geohash = this.props.location.query.geohash;
        this.setState({
            geohash
        })
        this.cityAddress(geohash);
        this.getMenu(geohash);
        this.setState({
            paginationWidth: this.pagination
        });
    }
    cityAddress(geohash) {
        getNowCityAddress(geohash).then(res => {
            this.setState({
                title: res.name
            });
        })
    }
    getMenu(geohash) {
        getClass(geohash).then(res => {
            let perSlideMenuCount = 8;
            let newResSlideCount = parseInt(res.length / perSlideMenuCount, 10);
            let newRes = [];
            for (let i = 0; i < newResSlideCount; i++) {
                newRes.push(res.splice(0, perSlideMenuCount))
            }
            this.setState({
                menu: newRes
            });
        });
    }
}

export default Main;