import React from 'react';
import { Picker } from 'react-native';
import { connect } from 'react-redux';

import { getChart } from '../reducers/chart';

class CountryPicker extends React.Component {
  render() {
    const { region, date } = this.props;
    return <Picker
        selectedValue={region}
        style={{flex: 1}}
        onValueChange={(
          itemValue => {
            this.props.getChart(itemValue, date);
          }
        )}
      >
        <Picker.Item label="🌐 Global" value="global" />
        <Picker.Item label="🇦🇹 Austria" value="at" />
        <Picker.Item label="🇦🇺 Australia" value="au" />
        <Picker.Item label="🇧🇪 Belgium" value="be" />
        <Picker.Item label="🇧🇬 Bulgaria" value="bg" />
        <Picker.Item label="🇧🇴 Bolivia" value="bo" />
        <Picker.Item label="🇧🇷 Brazil" value="br" />
        <Picker.Item label="🇨🇦 Canada" value="ca" />
        <Picker.Item label="🇨🇭 Switzerland" value="ch" />
        <Picker.Item label="🇨🇱 Chile" value="cl" />
        <Picker.Item label="🇨🇴 Colombia" value="co" />
        <Picker.Item label="🇨🇷 Costa Rica" value="cr" />
        <Picker.Item label="🇨🇿 Czechia" value="cz" />
        <Picker.Item label="🇩🇪 Germany" value="de" />
        <Picker.Item label="🇩🇰 Denmark" value="dk" />
        <Picker.Item label="🇩🇴 Dominican Republic" value="do" />
        <Picker.Item label="🇪🇨 Ecuador" value="ec" />
        <Picker.Item label="🇪🇪 Estonia" value="ee" />
        <Picker.Item label="🇪🇸 Spain" value="es" />
        <Picker.Item label="🇫🇮 Finland" value="fi" />
        <Picker.Item label="🇫🇷 France" value="fr" />
        <Picker.Item label="🇬🇷 Greece" value="gr" />
        <Picker.Item label="🇬🇹 Guatemala" value="gt" />
        <Picker.Item label="🇭🇰 Hong Kong SAR" value="hk" />
        <Picker.Item label="🇭🇳 Honduras" value="hn" />
        <Picker.Item label="🇭🇺 Hungary" value="hu" />
        <Picker.Item label="🇮🇩 Indonesia" value="id" />
        <Picker.Item label="🇮🇪 Ireland" value="ie" />
        <Picker.Item label="🇮🇱 Israel" value="il" />
        <Picker.Item label="🇮🇳 India" value="in" />
        <Picker.Item label="🇮🇸 Iceland" value="is" />
        <Picker.Item label="🇮🇹 Italy" value="it" />
        <Picker.Item label="🇯🇵 Japan" value="jp" />
        <Picker.Item label="🇱🇹 Lithuania" value="lt" />
        <Picker.Item label="🇱🇺 Luxembourg" value="lu" />
        <Picker.Item label="🇱🇻 Latvia" value="lv" />
        <Picker.Item label="🇲🇽 Mexico" value="mx" />
        <Picker.Item label="🇲🇾 Malaysia" value="my" />
        <Picker.Item label="🇳🇮 Nicaragua" value="ni" />
        <Picker.Item label="🇳🇱 Netherlands" value="nl" />
        <Picker.Item label="🇳🇴 Norway" value="no" />
        <Picker.Item label="🇳🇿 New Zealand" value="nz" />
        <Picker.Item label="🇵🇦 Panama" value="pa" />
        <Picker.Item label="🇵🇪 Peru" value="pe" />
        <Picker.Item label="🇵🇭 Philippines" value="ph" />
        <Picker.Item label="🇵🇱 Poland" value="pl" />
        <Picker.Item label="🇵🇹 Portugal" value="pt" />
        <Picker.Item label="🇵🇾 Paraguay" value="py" />
        <Picker.Item label="🇷🇴 Romania" value="ro" />
        <Picker.Item label="🇸🇪 Sweden" value="se" />
        <Picker.Item label="🇸🇬 Singapore" value="sg" />
        <Picker.Item label="🇸🇰 Slovakia" value="sk" />
        <Picker.Item label="🇸🇻 El Salvador" value="sv" />
        <Picker.Item label="🇹🇭 Thailand" value="th" />
        <Picker.Item label="🇹🇷 Turkey" value="tr" />
        <Picker.Item label="🇹🇼 Taiwan" value="tw" />
        <Picker.Item label="🇺🇸 United States" value="us" />
        <Picker.Item label="🇺🇾 Uruguay" value="uy" />
        <Picker.Item label="🇻🇳 Vietnam" value="vn" />
        <Picker.Item label="🇿🇦 South Africa" value="za" />
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

export default connect(mapStateToProps,mapDispatchToProps)(CountryPicker);
