import {View, FlatList, StyleSheet} from 'react-native';
import MealItem from "./MealItem";

function MealList({items}) {

    function renderMealItem(itemData) {
        return <MealItem item={itemData.item}/>;
    }

    return (
        <View style={styles.screen}>
            <FlatList data={items} 
            keyExtractor={(item) => item.id}
            renderItem={renderMealItem} 
            showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

export default MealList;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
    }
});