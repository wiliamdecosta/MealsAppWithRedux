import { CATEGORIES } from "../data/dummy-data";
import { FlatList, StyleSheet, View } from 'react-native';
import CategoryGridTile from "../components/CategoryGridTile";
import  { useNavigation } from '@react-navigation/native';

function CategoriesScreen() {
    const navigation = useNavigation();

    function renderCategoriItem(data) {
        function pressHandler() {
            navigation.navigate('MealsOverview', {
                categoryId: data.item.id,
            });
        }
    
        return <CategoryGridTile 
                title={data.item.title} 
                color={data.item.color}
                onPress={pressHandler} />;
    }
    
    return (
        <View style={styles.container}>
            <FlatList 
                data={CATEGORIES}
                keyExtractor={(item) => item.id}
                renderItem={renderCategoriItem}
                numColumns={2}
            />
        </View>
    );
}

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    backgroundColor: '#402f27'
  },
});