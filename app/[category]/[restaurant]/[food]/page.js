import { RESTAURANTS } from "@/app/resturantdatabase";
import Image from "next/image";

const Page = ({params}) => {
  const foodName = params.food
  const decodedFoodName = decodeURIComponent(foodName);
  const allFood = RESTAURANTS.flatMap(restaurant => restaurant.menu); 
  const food = allFood.find(food => food.name === decodedFoodName )
  
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
    </div>
  )
}
export default Page