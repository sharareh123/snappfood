import Image from "next/image"
import Link from "next/link"
import '../style.css';

const RestaurantCard = ({restaurant,imageSize = { width: '170px', height: '120px' },textSize = { fontSize: '14px', padding: '5px' },
  iconSize = { width: '10px',height:'10px'},
  cardSize = { width: '60px'}}) => {
  
  
  return (
    <div>
      <Link href={`/${restaurant.category}/${restaurant.name}`}>
        <div className="res_category_name">
          <div>
           <Image className="category_image" src={restaurant.image} alt={restaurant.name} style={{ width: imageSize.width, height: imageSize.height}}/>
          </div>
          <div className="text" style={{
              '--text-width': cardSize.width, 
              '--text-padding': textSize.padding, 
              '--text-font-size': textSize.fontSize 
            }}>
              <div>{restaurant.category}</div>
              <div><img src='./arrow_back_ios_16dp_FF00A6_FILL0_wght400_GRAD0_opsz20.svg' alt="arrow" style={{width:iconSize.width , height: iconSize.height}}/></div>
          </div>
        </div>  
      </Link>
    </div>    
  )
}
export default RestaurantCard

