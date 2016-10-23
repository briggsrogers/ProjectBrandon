import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import Summary from './Components/Summary.js';

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

        this.setState({
            forecast: {
              timestamp: timestamp,
              swell : maxBreakingHeight
            }
        });

        console.log(this.state);

      } else {
        console.warn('error', request.responseText);
      }
    };

    request.open('GET', 'http://magicseaweed.com/api/12422bf2f612f81a60e6ef5dd516cec1/forecast/?spot_id=667');
    request.send();

  }

  render() {

    let swellHeight = this.state.forecast.swell ? this.state.forecast.swell : '';
    let swellIntroPhrase = "Swell is ";

    return (

      <View>

          <View style = {styles.bgcontainer}>
            <Image style = {styles.bgimage} source={require('./assets/images/dingle@2x.jpg')} />
          </View>

          <View style={styles.copycontainer}>
            <Text style={styles.location}>
              Brandon Bay
            </Text>

            <View style = {styles.breaker}></View>

            <Text style={styles.forecast}>
            {swellIntroPhrase}
              <Text style={{fontWeight: 'bold'}}>
              {swellHeight}ft.
              </Text>
            </Text>
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
  forecast: {
    fontSize: 42,
    fontWeight : '200',
    marginTop: 30,
    color: 'white',
  },
  breaker : {
    width : 30,
    height : .5,
    marginTop: 30,
    backgroundColor: 'white',
  }
});

AppRegistry.registerComponent('ProjectBrandon', () => ProjectBrandon);
