import React, { Component } from 'react';
import NavHeader from './../../components/navHeader/NavHeader';

class City extends Component {
    constructor(props){
        super(props);
        this.state={
            cityId:this.props.params.cityId
        }
    }
    render() {
        return (
            <div>
                <NavHeader />
            </div>
        );
    }
    componentDidMount(){
       console.log(this.state)
    }
}

export default City;