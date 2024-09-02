import { filterByCategory } from "@/data/utils/filterByCategory";
import RestaurantList from "./component/RestaurantList";
import { Fast_Food, Iranian_Traditional_Food, Liver_House,Kebab_Restaurant, Home_style_Restaurante } from "./resturantdatabase";
import './style.css';

const Page = () => {

  const Iranian_Traditional_Food_restaurants = filterByCategory(Iranian_Traditional_Food)

  const Fast_Food_restaurants = filterByCategory(Fast_Food) 

  const Kebab_Restaurant_restaurants = filterByCategory(Kebab_Restaurant)

  const Liver_House_restaurants = filterByCategory(Liver_House)

  const Home_style_Restaurante_restaurants = filterByCategory(Home_style_Restaurante) 


  return (
    <div  className="total_container">
      <div className="restaurant_container">
        <div className="restaurant-list-container">
         <RestaurantList category={Fast_Food} restaurants={Fast_Food_restaurants} className="restaurant-list" />
        </div>
        <div className="restaurant-list-container">
          <RestaurantList category={Iranian_Traditional_Food} restaurants={Iranian_Traditional_Food_restaurants} className="restaurant-list" />
        </div>
        <div className="restaurant-list-container">
        <RestaurantList category={Kebab_Restaurant} restaurants={Kebab_Restaurant_restaurants} className="restaurant-list" />
        </div>
        <div className="restaurant-list-container">
          <RestaurantList category={Liver_House} restaurants={Liver_House_restaurants} className="restaurant-list" />
        </div>
        <div className="restaurant-list-container">
        <RestaurantList category={Home_style_Restaurante} restaurants={Home_style_Restaurante_restaurants} className="restaurant-list" />
        </div>
      </div>
    </div>
  )
}
export default Page