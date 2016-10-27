import React, {Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class SwellSummary extends Component {

    constructor(props) {
        super(props);
      }

      render() {
          return (
            <Text style={{fontWeight: 'bold'}}>
              Swell is {this.props.items}
            </Text>
          )
      };
    }

    const styles = StyleSheet.create({

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

    AppRegistry.registerComponent('SwellSummary', () => ProjectBrandon);
