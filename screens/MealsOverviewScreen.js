import {MEALS, CATEGORIES} from '../data/dummy-data.js';
import  { useNavigation, useRoute } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import MealList from '../components/MealList/MealList.js';

function MealsOverviewScreen() {

    //params from other screen
    const route = useRoute();
    const params = route.params;
    const categoryId = params.categoryId;

    const navigation = useNavigation();
    
    //after component render
    // useEffect(() => {
    //     const categoryTitle = CATEGORIES.find((cat) => cat.id === categoryId).title;
    
    //     navigation.setOptions({
    //         title: categoryTitle
    //     });
    // },[categoryId, navigation]);

    //simultaniously with component render
    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((cat) => cat.id === categoryId).title;
    
        navigation.setOptions({
            title: categoryTitle
        });
    },[categoryId, navigation]);

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(categoryId) >= 0;
    });

    return (
        <MealList items={displayedMeals} />
    );
}

export default MealsOverviewScreen;