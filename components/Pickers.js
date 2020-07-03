import React from 'react';
import { View, StyleSheet } from 'react-native';

import CountryPicker from './CountryPicker';
import DatePicker from './DatePicker';

class Pickers extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <CountryPicker />
                <DatePicker />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    }
});

export default Pickers;