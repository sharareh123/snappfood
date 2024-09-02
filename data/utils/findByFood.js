import { RESTAURANTS } from "@/app/resturantdatabase";

export const findByFood = (foodName) => {
  const allFood = RESTAURANTS.flatMap(restaurant => restaurant.menu);
  return allFood.find(food => food.name === foodName)[0]
}