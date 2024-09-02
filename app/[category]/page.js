import Link from "next/link";
import RestaurantCard from "../component/RestaurantCard"
import { RESTAURANTS } from "../resturantdatabase"

const Page = ({params}) => {
  const category = params.category
  const decodedCategory = decodeURIComponent(category);
  const CATEGORY_RESTAURANTS = RESTAURANTS.filter (restaurant => restaurant.category === decodedCategory)
  const isEmptyRestaurant = CATEGORY_RESTAURANTS.length ===0
  if (isEmptyRestaurant) {
    return(
      <Link href={'/'}>
        <div>
          این قسمت رستورانی ندارد. به صفحه اصلی باز گردید.
        </div>
      </Link>
      
    ) 
  }
  return (
    <div>
      {CATEGORY_RESTAURANTS.map( restaurant => <RestaurantCard  key={restaurant.id} restaurant={restaurant}/>)}
    </div>
  )
}
export default Page