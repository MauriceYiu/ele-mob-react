import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';

const styles = {
    root: {
        position: 'relative',
    },
    slide: {
        padding: 15,
        minHeight: 100,
        color: '#fff',
    },
    slide1: {
        backgroundColor: '#FEA900',
    },
    slide2: {
        backgroundColor: '#B3DC4A',
    },
    slide3: {
        backgroundColor: '#6AC0FF',
    },
};

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            geohash: '',
            index: 0
        };
    }
    handleChangeIndex = index => {
        this.setState({
            index
        });
    };
    render() {
        const { index } = this.state;
        return (
            <div id="main">
                <div style={styles.root}>
                    <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
                        <div style={Object.assign({}, styles.slide, styles.slide1)}>slide n°1</div>
                        <div style={Object.assign({}, styles.slide, styles.slide2)}>slide n°2</div>
                        <div style={Object.assign({}, styles.slide, styles.slide3)}>slide n°3</div>
                    </SwipeableViews>
                </div>
            </div>
        );
    }
    componentDidMount() {
        let geohash = this.props.location.query.geohash;
        this.setState({
            geohash
        })
    }
}

export default Main;