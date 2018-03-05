import React, { Component } from 'react';
import NavHeader from './../../components/navHeader/NavHeader';
import './style.scss';
import { getNowCity, getHotCityList, getOtherCityList } from './../../api/site';

class SelectCity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nowCity: {
                name: '正在定位中...'
            },
            hotCityList: [],
            otherCityList: []
        }
    }
    render() {
        return (
            <div id="select-city">
                <NavHeader />
                <div className="now-city clearfix">
                    <span className="now-city-tit">当前定位城市</span>
                    <span className="now-city-ask">定位不准时，请在城市列表中选择</span>
                </div>
                <div className="now" onClick={()=>this.selCity(this.state.nowCity)}>
                    <span className="city-name">{this.state.nowCity.name}</span>
                    <span className="arrow-right">></span>
                </div>
                <div className="hot-city">
                    <div className="hot-city-tit">
                        <p>热门城市</p>
                    </div>
                    <div className="hot-city-list">
                        <ul>
                            {
                                this.state.hotCityList.map((item, index) => {
                                    // return (<li onClick={this.selCity.bind(this, item)} key={index}>{item.name}</li>);
                                    return (<li onClick={()=>this.selCity(item)} key={index}>{item.name}</li>);
                                })
                            }
                        </ul>
                    </div>
                </div>

                {
                    this.state.otherCityList.map((item, index) => {
                        return (
                            <div className="other-city" key={index}>
                                <div className="other-city-tit">
                                    <p>{item.orderBy}</p>
                                </div>
                                <div className="other-city-list">
                                    <ul>
                                        {
                                            item.cityList.map((innerItem, innerIndex) => {
                                                return (<li onClick={()=>this.selCity(item)} key={innerIndex}>{innerItem.name}</li>);
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        );
                    })
                }

            </div>
        );
    }
    componentDidMount() {
        //获取当前城市
        getNowCity().then(res => {
            this.setState({
                nowCity: res
            })
        });
        // 获取热门城市
        this.getHotCity();
        this.getOtherCity();
    }
    getHotCity() {
        getHotCityList().then(res => {
            this.setState({
                hotCityList: res
            });
        });
    }
    getOtherCity() {
        getOtherCityList().then(res => {
            let keyArr = Object.keys(res).sort();
            let otherCityList = [];
            keyArr.forEach((item, index) => {
                otherCityList.push({
                    orderBy: item,
                    cityList: res[item]
                });
            });
            this.setState({
                otherCityList
            });
        });
    }
    selCity(cityInfo) {
        if (cityInfo.id !== null || cityInfo.id !== undefined) {
            this.props.router.push('/city/' + cityInfo.id);
        }
    }
}

export default SelectCity;