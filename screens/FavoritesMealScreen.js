import {View, StyleSheet, Text} from 'react-native';
import {MEALS} from '../data/dummy-data';
import MealItem from '../components/MealList/MealItem';
import Subtitle from '../components/MealDetails/Subtitile';
import MealList from '../components/MealList/MealList';

import {useSelector} from 'react-redux';

function FavoritesMealScreen() {
    //const favMealsCtx = useContext(FavoritesContext);
    
    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
    const favoriteMeals = MEALS.filter((meal) => favoriteMealIds.includes(meal.id));

    if(favoriteMeals.length == 0) {
        return (
            <View style={styles.emptyFavContainer}>
                <Text style={styles.emptyFav}>Oops, You don't have favorite meals.</Text>
            </View>
        );
    }

    return (
        <View style={styles.screen}>
            <View style={styles.title}>
                <Subtitle>Favorite Meals : </Subtitle>
            </View>
            <MealList items={favoriteMeals} />
        </View>
    );
}

export default FavoritesMealScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },

    title: {
        marginTop: 24,
        marginHorizontal: 24
    },

    emptyFavContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    emptyFav: {
        color: 'yellow',
        fontSize: 18,
        fontFamily: 'poppins',
        textAlign: 'center',
    },
});