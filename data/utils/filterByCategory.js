import { DATABASE,restaurants } from "@/app/resturantdatabase"
export const filterByCategory = (category) => {
  return DATABASE.restaurants.filter(restaurant => restaurant.category === category)
}