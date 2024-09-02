import { useDispatch, useSelector } from "react-redux"
import { CartItem } from "../component/CartItem"
import { useCallback, useMemo } from "react"
import { reset } from "@/data/redux/cartSlice"
import { calculateShopingCart } from "@/data/utils/calculateShopingCart"
import { addToHistory, clearHistory } from "@/data/redux/historySlice"
import '../style.css'

export const CartList = () => {

  const {cart} = useSelector (store => store.cart)
  const history = useSelector(store => store.history);
  const historyCart = history?.historyCart || []; 
  const dispatch = useDispatch()
  const isNotEmptyCart = !!cart.length

  const handleResetCart = useCallback(() => {
  dispatch(reset());
  }, [dispatch]);

  const totalPrice = useMemo(() => calculateShopingCart(cart),[cart]) 

  const handleCheckout = useCallback(() => {
  dispatch(addToHistory({ userId: 1, item: cart, totalPrice }));
  dispatch(reset());
}, [totalPrice, cart]);

const handleClearHistory = useCallback(() => {
    dispatch(clearHistory());
  }, [dispatch]);


 

  return(
    <div style={{display:'flex',flexDirection:'column'}}>
      <div className="orders_header">
        <div>
        سفارشات :
        </div>
      </div>
      {isNotEmptyCart ?
        <div>
          <div className="cart_food_card">
             {cart.map((food) =>(
              <CartItem key={food.id} food={food}/> 
             ))}
          </div>
          <div className="total_cart_container">
            <div className="total_cart">
              کل سبد خرید : {totalPrice} تومان
            </div>
          </div>
        </div>
        :
        <div style={{margin:15}}>
          سبد خرید خالی است!
        </div>
      }
      <div className="delete_payment_container">
      {isNotEmptyCart &&
       <div>
        <button onClick={handleCheckout} className="all_delete_payment_btns">
          پرداخت
        </button>
       </div> 
      }
      {isNotEmptyCart &&
       <div>
        <button onClick={handleResetCart} className="all_delete_payment_btns">
        حذف همه 
        </button>
       </div>
      }
      {historyCart.length > 0 && (
          <div>
            <button onClick={handleClearHistory} className="all_delete_payment_btns">
              پاک کردن تاریخچه خرید
            </button>
          </div>
        )}
      </div>
      
    </div>
  )
}