import { View, Pressable, Text, StyleSheet } from 'react-native';

function CategoryGridTile({ title, color, onPress }) {

    return(
        <View style={styles.button}>
            <Pressable style={[styles.gridItem, { backgroundColor: color }]}
                        android_ripple={{ color: '#c4c4c4' }}
                        onPress={onPress}>
                <View style={styles.innerContainer}>
                    <Text style={styles.textItem}>{title}</Text>
                </View>
            </Pressable>    
        </View>
    );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        height: 150,
        margin: 16,
        borderRadius: 8,
        elevation: 8,
        alignItems: 'center',
    },

    button: {
        flex: 1,
    },

    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },

    textItem: {
        fontFamily: 'poppins-bold',
        fontSize: 16,
        color: '#4f4f4f'
    },

});