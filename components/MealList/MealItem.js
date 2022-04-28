import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

function MealItem({ item }) {
    const navigation = useNavigation();

    function onPressHandler() {
        navigation.navigate('MealDetails', {mealId: item.id});
    }

    return (
        <View style={styles.mealItem}>
            <Pressable android_ripple={{color: '#ccc'}} onPress={onPressHandler}>
                <View>
                    <Image source={{uri: item.imageUrl}} style={styles.image}/>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.detailItem}>{item.duration}m</Text>
                    <Text style={styles.detailItem}>{item.complexity}</Text>
                    <Text style={styles.detailItem}>{item.affordability}</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default MealItem;

const styles = StyleSheet.create({

    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 16,
    },

    image: {
        width: '100%',
        height: 200,
    },

    title: {
        fontFamily: 'poppins-bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },

    details: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
    },

    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
        fontFamily: 'poppins'
    },

});