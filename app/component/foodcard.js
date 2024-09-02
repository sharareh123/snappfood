import React from 'react';
import Image from 'next/image'; // اگر از Next.js استفاده می‌کنید


const FoodCard = ({ food}) => {
  return (
  <div className='history_food_card_container'> 
    <div key={food.id} className="history_food_card">
      <div style={{display:'flex',justifyContent:'space-between'}}>
        <div style={{ marginRight: 15, marginLeft: 10,marginTop:15 }}>
          <div className="history_food_name">
            {food.name}
          </div>
          <div className="history_food_description">
            {food.description}
          </div>
        </div>
        <div style={{marginTop:15,marginLeft:10}}>
          <Image
            className="history_food_img"
            src={food.image}
            alt={food.name}
            width={70}
            height={70} 
          />
        </div>
      </div>
      <div className='history_food_price'>
          {food.price}
      </div>  
    </div>
  </div> 
  );
};

export default FoodCard;