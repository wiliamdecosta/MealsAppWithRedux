import {View, Text, StyleSheet} from 'react-native';

function Details({duration, complexity, affordability}) {
    return (
        <View style={styles.details}>
            <Text style={styles.detailItem}>{duration}m</Text>
            <Text style={styles.detailItem}>{complexity}</Text>
            <Text style={styles.detailItem}>{affordability}</Text>
        </View>
    );
}

export default Details;

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        justifyContent: 'center'
    },

    detailItem: {
        marginHorizontal: 4,
        fontSize: 14,
        fontFamily: 'poppins',
        color: '#c4c4c4'
    },
});