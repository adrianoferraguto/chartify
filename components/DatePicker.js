import React from 'react';
import { Picker } from 'react-native';
import { connect } from 'react-redux';

import { getChart } from '../reducers/chart';

class DatePicker extends React.Component {
  render() {
    const { region, date } = this.props;
    let dates = (()=> {
      let toReturn = [];
      for(let i=2; i<=32; i++) {
        toReturn.push((d => new Date(d.setDate(d.getDate()-i)).toISOString().split('T')[0])(new Date));
      }
      return toReturn;
    })();
    return <Picker
      selectedValue={date}
      style={{flex: 1}}
      onValueChange={(
        itemValue => {
          this.props.getChart(region, itemValue);
        }
      )}
    >
      <Picker.Item label="📅 Latest" value="latest" key={-1}/>
      {dates.map((date, index) => {
        return (<Picker.Item label={date} value={date} key={index}/>) 
      })}
    </Picker>
  }
}

const mapStateToProps = state => ({
  region: state.chart.region,
  date: state.chart.date
});

const mapDispatchToProps = {
  getChart
};

export default connect(mapStateToProps,mapDispatchToProps)(DatePicker);
