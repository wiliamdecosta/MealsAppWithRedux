import {View, Text, StyleSheet} from 'react-native';

function Subtitle(props) {
    return(<View style={styles.textContainer}>
        <Text style={styles.text}>{props.children}</Text>
    </View>);
}

export default Subtitle;

const styles = StyleSheet.create({

    textContainer: {
        borderBottomWidth: 2,
        borderBottomColor: '#e0b49b',
        width:'100%',
        marginBottom:15,
    },
    text: {
        fontFamily: 'poppins-bold',
        fontSize: 16,
        color: '#e0b49b',
        textAlign:'center'
    },

});