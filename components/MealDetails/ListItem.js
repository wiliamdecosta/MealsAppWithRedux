import {View, Text, StyleSheet} from 'react-native';

function ListItem({data}) {
    return(<View style={styles.container}>
        {data.map((item, idx) => (
            <View style={styles.itemContainer} key={idx}>
                <Text style={styles.listItem}>{item}</Text>
            </View>
        ))}
    </View>);
}

export default ListItem;

const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    itemContainer: {
        backgroundColor: '#e0b39c',
        padding: 10,
        marginBottom: 5,
        borderRadius: 10,
    },

    listItem: {
        fontFamily: 'poppins-bold',
        fontSize: 10,
        color: '#835840',
        textAlign: 'center'
    },
});