import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import  { useNavigation, useRoute } from '@react-navigation/native';
import { useLayoutEffect, useState } from 'react';
import { MEALS } from '../data/dummy-data';
import Subtitle from '../components/MealDetails/Subtitile';
import Details from '../components/MealDetails/Details';
import ListItem from '../components/MealDetails/ListItem';
import Ionicons from '@expo/vector-icons/Ionicons';
import SnackBarComponent from '../components/SnackBar';

import {useSelector, useDispatch} from 'react-redux';
import {addFavorite, removeFavorite} from '../store/redux/favorites';

function MealDetailScreen() {
    
    //redux
    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
    const dispatch = useDispatch();

    const navigation = useNavigation();
    const route = useRoute();
    const params = route.params;
    const mealId = params.mealId;
    
    const[snackBarVisible, setSnackBarVisible] = useState(false);
    const[snackBarText, setSnackBarText] = useState('');
    
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    const mealIsFavorite = favoriteMealIds.includes(mealId);

    function onFavoritePressHandler() {
        setSnackBarVisible(!mealIsFavorite ? true: false);
        setSnackBarText('Added to favorite meal!');

        if(!mealIsFavorite) { //now unliked to liked
            dispatch(addFavorite({theId: mealId}));
        }else {
            dispatch(removeFavorite({theId: mealId}));
        }
    }

    function snackBarOnPressHandler() {
        setSnackBarVisible(false);
    }
    
    useLayoutEffect(() => {
        const mealName = selectedMeal.title; 
        const starColor = !mealIsFavorite ? 'white' : 'red'; 
        navigation.setOptions({
            title: mealName,
            headerRight: () => {
                return <Ionicons 
                            name='heart' 
                            size={24} 
                            color={starColor} 
                            onPress={onFavoritePressHandler}/>
            }
        });

    }, [selectedMeal, navigation, onFavoritePressHandler, mealIsFavorite]);

    return(
        <>
            <ScrollView style={styles.root}>
                <View style={styles.imageContainer}>
                    <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
                </View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.title}>{selectedMeal.title}</Text>
                    <Details duration={selectedMeal.duration}
                            complexity={selectedMeal.complexity}
                            affordability={selectedMeal.affordability}/>
                </View>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <ListItem data={selectedMeal.ingredients}/>
                </View>
                <View style={styles.listContainer}>
                    <Subtitle>Steps</Subtitle>
                    <ListItem data={selectedMeal.steps}/>
                </View>
            </ScrollView>
            <SnackBarComponent visible={snackBarVisible} 
                    textMessage={snackBarText}
                    actionHandler={snackBarOnPressHandler} />
        </>
    );
}

export default MealDetailScreen;

const styles = StyleSheet.create({

    root: {
        flex: 1,
        marginBottom: 32,
    },

    imageContainer: {
        marginBottom: 15,
    },

    image: {
        width: '100%',
        height: 300,
    },

    detailsContainer: {
        margin: 15,
        alignItems: 'center'
    },

    title: {
        fontFamily: 'poppins-bold',
        fontSize: 18,
        color: 'white',
        textAlign: 'center'
    },

    listContainer: {
        alignItems: 'center',
        marginBottom: 15,
        marginHorizontal:24,
    },

});