import React, { Component } from 'react';
import NavHeader from './../../components/navHeader/NavHeader';
import { getNowSite, searchSite } from './../../api/site';
import { saveLocal, getLocal, clearLocal } from './../../utils/localStorage';
import './city.scss';

class City extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityId: this.props.params.cityId,
            cityNameTit: '',
            searchVal: '',
            searchRes: [],
            selectedCity: []
        }
        this.toSelCity = this.toSelCity.bind(this);
        this.getSearchSite = this.getSearchSite.bind(this);
        this.inputVal = this.inputVal.bind(this);
        this.enterSearch = this.enterSearch.bind(this);
        this.toMainAndSaveLocal = this.toMainAndSaveLocal.bind(this);
        this.clearAll = this.clearAll.bind(this);
    }
    render() {
        return (
            <div>
                <NavHeader cityNameTit={this.state.cityNameTit} showBack={true} routerFun={this.props.router}>
                    <span className="change-city" onClick={this.toSelCity}>切换城市</span>
                </NavHeader>
                <div className="search-site">
                    <div className="search-inp">
                        <input type="text" placeholder="请输入学习、商务楼、地址" name="" id=""
                            onChange={this.inputVal} value={this.state.searchVal} onKeyDown={this.enterSearch} />
                    </div>
                    <div className="search-btn">
                        <span className="search" onClick={this.getSearchSite}>提交</span>
                    </div>
                </div>
                <div className="search-res">
                    <ul>
                        {
                            this.state.searchRes.map((item, index) => {
                                return (
                                    <li className="search-item" key={index}
                                        onClick={() => { return this.toMainAndSaveLocal(item) }}>
                                        <div className="site-name">{item.name}</div>
                                        <div className="site-info">{item.address}</div>
                                    </li>
                                );
                            })
                        }

                    </ul>
                </div>
                {
                    this.state.selectedCity ? (
                        <div className="search-history">
                            <ul>
                                {
                                    this.state.selectedCity.map((item, index) => {
                                        return (
                                            <li className="search-item" onClick={() => { return this.toMainAndSaveLocal(item) }} key={index}>
                                                <div className="site-name">{item.name}</div>
                                                <div className="site-info">{item.address}</div>
                                            </li>
                                        );
                                    })
                                }
                                <p className="clear-all" onClick={this.clearAll}>清除所有</p>
                            </ul>
                        </div>
                    ) : ''
                }
            </div>
        );
    }
    componentDidMount() {
        // console.log(this.state.selectedCity.length);
        getNowSite(this.state.cityId).then(res => {
            let cityNameTit = res.name;
            this.setState({
                cityNameTit
            })
        });
        let selectedCity = getLocal('selectedCity');
        selectedCity = JSON.parse(selectedCity);
        this.setState({
            selectedCity
        })
    }
    toSelCity() {
        this.props.router.push('/');
    }
    getSearchSite() {
        searchSite(this.state.cityId, this.state.searchVal).then(res => {
            if (!res.length) {
                this.setState({
                    searchRes: []
                });
                return;
            }
            this.setState({
                searchRes: res
            });
        });
    }
    inputVal(e) {
        this.setState({
            searchVal: e.target.value
        })
    }
    enterSearch(e) {
        if (e.keyCode === 13) {
            this.getSearchSite();
        }
    }
    toMainAndSaveLocal(item) {
        let oriSelectedData = getLocal('selectedCity');
        // console.log(oriSelectedData);
        let repeat = false;
        if (!oriSelectedData) {
            oriSelectedData = [];
        } else {
            oriSelectedData = JSON.parse(oriSelectedData);
            oriSelectedData.forEach(dataItem => {
                if (dataItem.latitude === item.latitude && dataItem.longitude === item.longitude) {
                    repeat = true;
                }
            })
        }
        if (!repeat) {
            oriSelectedData.push(item);
        }
        // console.log(oriSelectedData);
        let strVal = JSON.stringify(oriSelectedData);
        saveLocal('selectedCity', strVal);
        let geohash = item.latitude+','+item.longitude;
        this.props.router.push({pathname:'/main',query:{geohash}})
    }
    clearAll() {
        clearLocal();
        this.setState({
            selectedCity: null
        })
    }
}

export default City;