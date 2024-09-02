
import Link from "next/link"
import RestaurantCard from "./RestaurantCard"
import Image from "next/image"

const RestaurantList = ({restaurants, imageSize,iconSize,textSize,cardSize}) => {
  return(
  <div>
    <div style={{display:'flex'}}>
      {restaurants.map (restaurant =>
        <RestaurantCard key={restaurant.id} restaurant={restaurant} imageSize={imageSize} iconSize={iconSize} textSize={textSize} cardSize={cardSize}/>
      )}
    </div>
  </div>
  )
}
export default RestaurantList

