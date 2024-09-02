import { RESTAURANTS } from "@/app/resturantdatabase";
import Image from "next/image";

const Page = ({params}) => {
  const foodName = params.food
  const decodedFoodName = decodeURIComponent(foodName);
  const allFood = RESTAURANTS.flatMap(restaurant => restaurant.menu); 
  const food = allFood.find(food => food.name === decodedFoodName )
  //const restaurantMenu = Array.isArray(restaurant?.menu) ? restaurant.menu : [];
  return (
    <div>
      <div>
        <h2>
          <strong>{food.name}</strong>
        </h2>
      </div>
      <div>
        <Image src={food.image} alt={food.name} width={200}/>
      </div>
      <div>
        <h3>
        {food.description}
        </h3>
      </div>
      <div>
        {food.price}
      </div>
      {/*<div style={{display:'flex',margin:12}}>
        <h4>منو:</h4>
        <ul>
         {restaurant.menu.length > 0 ? (
          restaurant.menu.map((food) => (
           <div key={restaurant.menu.id} style={{display:'flex',flexDirection:'row'}}>
             <div>{food.name}</div>: 
             <div>
                 <Image src={food.image} alt={food.name} width={100} height={100} />
             </div>               
             <div>
              {food.description}
             </div>
             
             <AddButton food={food}/>
           </div>
            
          ))
         ) : (
          <Link href={'/'}>
             <p>منو موجود نیست</p>
          </Link>
          
         )}
        </ul>
      </div>*/}
    </div>
  )
}
export default Page