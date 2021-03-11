import Products from '../Screens/Products';
import Cart from '../Screens/Cart';
import Orders from '../Screens/Orders';
import Categories from '../Screens/Categories';
import Profile from '../Screens/Profile';

const leftMenuComp = {
    "Products": Products,
    "Cart": Cart,
    "Orders": Orders,
    "Categories": Categories,
    "Profile": Profile,

};

export function renderComponent(screen) {
    const SpecificStory = leftMenuComp[screen];
    return <SpecificStory />;
}