'use client'
import { AddButton } from "@/app/component/AddButton";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import '../../style.css';

const { RESTAURANTS } = require("@/app/resturantdatabase")

const Page = ({params}) => {
  const restaurantName = params.restaurant
  const decodedRestaurantName = decodeURIComponent(restaurantName);
  const restaurant = RESTAURANTS.find(restaurant => restaurant.name === decodedRestaurantName)
  const restaurantMenu = Array.isArray(restaurant?.menu) ? restaurant.menu : [];

  const [selectedFood, setSelectedFood] = useState(null);

  const handleFoodClick = (food) => {
    setSelectedFood(food);
  };

  const handleCloseFoodInfo = () => {
    setSelectedFood(null);
  };
  return (
    <div className="res_page">
      <div className='res_card'>
       <div className='image_container'>
        <Image className='res_img' src={restaurant.image} alt={restaurant.name} layout='fill' objectFit='cover' />
          <div className='icon_container'>
            <Image src={restaurant.icon} alt={restaurant.icon} layout="fill" className='icon' />
          </div>
       </div>
       <h3 className='res_name'>{restaurant.name}</h3>
       <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <h5 className='res_rang_icon'> {restaurant.rang_icon}</h5>
        <h5 className='res_rang_num'> {restaurant.rang_num}</h5>
       </div>
       <div className='res_description'>
        {restaurant.description}
       </div>
      </div> 
      <div className="food_card_container">
         {restaurantMenu.length > 0 ? (
          restaurantMenu.map((food) => (
            <div key={restaurant.menu.id} className="food_card" >
              <div style={{display:'flex', alignItems:'center',marginBottom:10,justifyContent:'space-between'}}>
                <div style={{ marginRight: 10, marginLeft:10 }}>
                  <div  className="food_name" onClick={() => handleFoodClick(food)}>
                    {food.name}
                  </div>
                  <div className="food_description" onClick={() => handleFoodClick(food)}>
                   {food.description}
                  </div>
                </div> 
                <div>
                 <Image className="food_img" src={food.image} alt={food.name} width={80} height={80} onClick={() => handleFoodClick(food)}/>
                </div>
              </div> 
              <div className="food_price_add">
               <div className="food_price">
                {food.price} تومان
               </div>
               <AddButton food={food}/>
              </div>              
            </div>
          ))
         ) : (
          <Link href={'/'}>
             <p>منو موجود نیست</p>
          </Link>
         )}
      </div>
      {selectedFood && (
        <div className="selectfood_container">
          <div className="selectfood_name">{selectedFood.name}</div>
          <Image className="selectfood_img" src={selectedFood.image} alt={selectedFood.name} width={100} height={100} />
          <p className="selectfood_des">{selectedFood.description}</p>
          <p className="selectfood_price">قیمت: {selectedFood.price} تومان</p>
          <button onClick={handleCloseFoodInfo} style={{ marginTop: 10 }}>
            بستن
          </button>
        </div>
      )}
    </div>
  )
}
export default Page