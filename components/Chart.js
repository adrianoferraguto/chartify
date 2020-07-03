import React from 'react';
import { StyleSheet, Text, View, Linking, Alert } from 'react-native';
import { connect } from 'react-redux';
import { ListItem } from 'react-native-elements';

import { getChart } from '../reducers/chart';

class Chart extends React.Component {
  componentDidMount() {
    this.props.getChart('global', 'latest');
  }
  render() {
    const { chartItems, loading } = this.props;
    if (loading)
      return <Text>Loading...</Text>
    else return (
      chartItems.map(
        item => {
          item.Streams = item.Streams.length>5? item.Streams.slice(0, -3) + 'k' : item.Streams;
          return(
            <ListItem
              key={item.Position}
              title={item['Track Name']}
              subtitle={item.Artist}
              leftElement={() =>
                <View style={styles.positionView}>
                  <Text style={styles.positionText}>{item.Position}</Text>
                </View>
              }
              onPress={() => {
                Linking.canOpenURL(item.URL).then(supported => {
                  if (supported) {
                    Linking.openURL(item.URL);
                  } else {
                    Alert.alert(
                      'Whoops',
                      'Cannot open the link, sorry :(',
                      [
                        {text: 'OK'},
                      ],
                    );
                  }
                });
              }}
              badge={{ value: item.Streams, textStyle: styles.badgeText, badgeStyle: styles.badge, containerStyle: styles.badgeContainer }}
              bottomDivider
            />
          )
        }
      )
    );
  }
}

const styles = StyleSheet.create({
  badge: {
    backgroundColor: 'darkgray',
    padding: 10
  },
  badgeText: {
    color: '#fff'
  },
  positionView: {
    width: 25
  },
  positionText: {
    textAlign: 'center'
  }
});

const mapStateToProps = state => ({
  chartItems: state.chart.chartItems,
  loading: state.chart.loading,
  region: state.chart.region,
  date: state.chart.date
});

const mapDispatchToProps = {
  getChart
};

export default connect(mapStateToProps, mapDispatchToProps)(Chart);
