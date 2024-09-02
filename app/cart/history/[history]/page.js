'use client'
import { findByHistory } from "@/data/utils/findByHistory"
import { useSelector } from "react-redux"
import FoodCard from "@/app/component/foodcard"
import '../../../style.css';


const Page = ({ params }) => {
  const [user_1] = useSelector(store => store.history);
  console.log("User Data:", user_1); 
  const historyId = +params.history
  console.log(historyId,'historyid');
  
  const cartHistory = findByHistory(user_1, historyId)
  console.log(cartHistory,'historycart');
  
  

  return (
    <div>
     <div className="orders_detail_page">
      <div className="orders_detail_title">
        جزییات تاریخچه خرید
      </div>
      <div className="carthistory_title_container">
        <div className="carthistory_title">
          شماره سفارش : {cartHistory.id}
        </div>
        <div className="carthistory_title">
          جمع هزینه ها: {cartHistory.totalPrice}
        </div>
      </div>
      
      <div>
        {cartHistory.item && cartHistory.item.length > 0 ? (
          cartHistory.item.map(food => (
            <FoodCard key={food.id} food={food} />
          ))
        ) : (
          <p>هیچ کالایی در این سفارش وجود ندارد.</p>
        )}
      </div>
     </div> 
    </div>
  )
}
export default Page