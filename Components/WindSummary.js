import React, {Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class WindSummary extends Component {

    constructor(props) {
        super(props);
      }

      render() {

      var windDirectionToShore = windToShore(this.props.items[1]);

          return (
            <Text style={styles.windSummary}>
              <Text style={{fontWeight: 'bold'}}>with a {this.props.items[0]}mph </Text>
              {windDirectionToShore} wind.
            </Text>
          )
      };
    }

    function windToShore(windDirection){

      if(windDirection > 45 && windDirection < 135){
        return "cross-shore"
      }
      else if(windDirection > 135 && windDirection < 225){
        return "on-shore"
      }
      else if(windDirection > 225 && windDirection < 315){
        return "cross-shore"
      }
      else if(windDirection > 315 && windDirection < 359){
        return "off-shore"
      }
      else {
        return "off-shore"
      }
    }

    const styles = StyleSheet.create({

      windSummary: {
        fontSize: 16,
        fontWeight : '200',
        marginTop: 10,
        color: 'white',
      }
    });

    AppRegistry.registerComponent('WindSummary', () => ProjectBrandon);
