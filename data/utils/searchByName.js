import { RESTAURANTS } from "../../app/resturantdatabase"

export const searchByName = (search) => {
   const allFoods = RESTAURANTS.flatMap(restaurant => restaurant.menu);
  return allFoods.filter(food => food.name.includes(search))
}