 import { addToCart, decreaseItem, removeItem } from "@/data/redux/cartSlice"
import Image from "next/image"
import { useCallback,useState } from "react"
import { useDispatch } from "react-redux"
import '../style.css'

export const CartItem = ({food}) => {

  const {name,image,description,price,count,id} = food
  const dispatch = useDispatch()
  const [selectedFood, setSelectedFood] = useState(null);

  const handleFoodClick = (food) => {
    setSelectedFood(food);
  };
  const handleAddToCart = useCallback(() => {
    dispatch(addToCart(food))
   },[])
   const handleDecreaseItem = useCallback(()=>{
    dispatch(decreaseItem(id))
   },[])

   const handleRemoveItem = useCallback(()=>{
      dispatch(removeItem(id))
   },[])


  
  return ( 
    <div style={{padding:12}} className="food_cart">
      <div className="cart_food_card_container">
        <div style={{ marginRight: 10, marginLeft:10 }}>
          <div  className="cart_food_name" onClick={() => handleFoodClick(food)}>
            {name}
          </div>
          <div className="cart_food_description" onClick={() => handleFoodClick(food)}>
            {description}
          </div>
        </div> 
        <div>
          <Image className="cart_food_img" src={image} alt={name} width={60} height={60} onClick={() => handleFoodClick(food)}/>
        </div>
      </div> 
      <div className="cart_food_price_add">
        <div>
        {price}
        </div>
        <div style={{display:'flex',alignItems:'center'}}>
         <button onClick={handleAddToCart} className="cart_food_btns">
           +
         </button>
         <div>
          {count}
         </div>
         {count>1 ? 
           <button onClick={handleDecreaseItem} className="cart_food_btns">
              -
           </button>
           : 
           <button onClick={handleRemoveItem} className="cart_food_rmv_btns">
             remove
           </button>
         }
        
        </div>
      </div>
    </div> 
  )
}