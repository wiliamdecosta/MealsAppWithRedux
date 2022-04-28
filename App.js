import { View } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen  from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import LoginScreen from './screens/LoginScreen';
//import FavoritesContextProvider from './store/context/favorites-context';
import FavoritesMealScreen from './screens/FavoritesMealScreen';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNav() {
  const headerStyles = {
    headerStyle: {backgroundColor: '#351401'},
    headerTitleStyle: {fontFamily: 'poppins'},
    headerTintColor: 'white',
    drawerStyle: {
      backgroundColor: '#3f2f25',
    },
    drawerInactiveTintColor: 'white',
    drawerActiveTintColor: '#e0b39c',
    sceneContainerStyle : {backgroundColor: '#3f2f25'},
  };

  return(
    <Drawer.Navigator screenOptions={{...headerStyles}}>
      <Drawer.Screen name="Home" component={CategoriesScreen} />
      <Drawer.Screen name="Favorites" component={FavoritesMealScreen} />
      <Drawer.Screen name="Login" component={LoginScreen} />
    </Drawer.Navigator>
  );
}



export default function App() {

  const [fontsLoaded] = useFonts({
    'poppins' : require('./assets/fonts/Poppins-Regular.ttf'),
    'poppins-bold' : require('./assets/fonts/Poppins-Bold.ttf'),
    'poppins-italic' : require('./assets/fonts/Poppins-Italic.ttf'),
    'poppins-semi-bold' : require('./assets/fonts/Poppins-SemiBold.ttf'),
  });

  if(!fontsLoaded) {
    return <AppLoading/>;
  }

  const headerStyles = {
    headerStyle: {backgroundColor: '#351401'},
    headerTitleStyle: {fontFamily: 'poppins'},
    headerTintColor: 'white',
    contentStyle: {backgroundColor: '#3f2f25'},
    animation: 'none',
  };

  return (
    <>
    <StatusBar style='light'/>
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='MealCategories' 
          screenOptions={{...headerStyles}}
          >
          <Stack.Screen name="MealCategories" 
                        component={DrawerNav} 
                        options={{
                          headerShown: false,
                        }}
          />
          <Stack.Screen name="MealsOverview" 
                        component={MealsOverviewScreen} 
                        options={{
                          title: 'Meals Overview',
          }}/>

          <Stack.Screen name="MealDetails" 
                        component={MealDetailScreen} 
                        options={{
                          title: 'Meal Details',
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    </>
  );
}
