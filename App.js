import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ItemDetailScreen from './src/screens/ItemDetailScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ItemDetail: ItemDetailScreen,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search',
    },
  }
);

export default createAppContainer(navigator);
