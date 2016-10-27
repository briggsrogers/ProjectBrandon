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

          const IntroPhrase = "Swell is ";
          return (
            <Text style = {styles.forecast}>
            {IntroPhrase}
              <Text style={{fontWeight: 'bold'}}>
              {this.props.items[0]}-{this.props.items[1]}ft
              </Text>
            < /Text>
          )
      };
    }

    const styles = StyleSheet.create({

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
