'use client'

import { addToCart } from "@/data/redux/cartSlice"
import { useCallback } from "react"
import { useDispatch } from "react-redux"
import '../style.css'

export const AddButton = ({food}) => {
  const dispatch = useDispatch()
  const handleAddToCart = useCallback(()=>{
     dispatch(addToCart(food))
  },[])
  return(
    <div>
      <div>
        <button onClick={handleAddToCart} className="food_add_btn">
          افزودن
        </button>
      </div>
    </div>
  )
}