const { RESTAURANTS } = require("@/app/resturantdatabase")

export const filterByRestaurant = (restaurantName) => {
  return RESTAURANTS.filter(restaurant => restaurant.name === restaurantName)[0]
}