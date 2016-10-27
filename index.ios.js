import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import SwellSummary from './Components/SwellSummary.js';
import WindSummary from './Components/WindSummary.js';

export default class ProjectBrandon extends Component {

  constructor(props) {
    super(props);
    this.state = {
      forecast: {},
      lastupdated : Date.now()
    };
  }

  componentDidMount() {

    var request = new XMLHttpRequest();
    request.onreadystatechange = (e) => {
      if (request.readyState !== 4) {
        return;
      }

      if (request.status === 200) {
        var forecast = JSON.parse(request.response)
        var timestamp = forecast[0].timestamp
        var maxBreakingHeight = forecast[0].swell.maxBreakingHeight
        var minBreakingHeight = forecast[0].swell.minBreakingHeight
        var windDirection = forecast[0].wind.direction
        var windSpeed = forecast[0].wind.speed

        this.setState({
          forecast: {
            maxBreakingHeight : maxBreakingHeight,
            minBreakingHeight : minBreakingHeight,
            windDirection: windDirection,
            windSpeed: windSpeed

          },
          lastupdated : Date.now()
        });

      } else {
        console.warn('error', request.responseText);
      }
    };

    request.open('GET', 'http://magicseaweed.com/api/12422bf2f612f81a60e6ef5dd516cec1/forecast/?spot_id=667');
    request.send();

  }

  render() {

    return (

      <View>

          <View style = {styles.bgcontainer}>
            <Image style = {styles.bgimage} source={require('./assets/images/dingle@2x.jpg')} />
          </View>

          <View style={styles.copycontainer}>

            <Text style={styles.location}>Brandon Bay</Text>
            <View style = {styles.breaker}></View>
            <SwellSummary items={[this.state.forecast.minBreakingHeight, this.state.forecast.maxBreakingHeight]}></SwellSummary>
            <WindSummary items={[this.state.forecast.windSpeed, this.state.forecast.windDirection]}></WindSummary>
          </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({

  bgcontainer:{
    position: 'absolute',
    flex: 1,
    alignItems: 'flex-start',
    top: 0, bottom: 0, left: 0, right: 0,
    borderRadius : 4
  },
  bgimage:{
    flex: 1,
    resizeMode: "stretch",
    width: 414,
    height: 736,
  },
  copycontainer: {
    top: 30,
    marginLeft: 30,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  location: {
    fontFamily: 'System',
    fontSize: 18,
    textAlign: 'left',
    marginTop: 30,
    color: 'white',
    fontWeight : '200',
    letterSpacing : -.5,
  },
  breaker : {
    width : 30,
    height : .5,
    marginTop: 30,
    backgroundColor: 'white',
  }
});

AppRegistry.registerComponent('ProjectBrandon', () => ProjectBrandon);
