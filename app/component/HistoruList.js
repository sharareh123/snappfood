import { store } from "@/data/redux/store"
import { useSelector } from "react-redux"
import { HistoryItem } from "./HistoryItem"
import '../style.css'

export const HistoryList = () => {
  const [user_1]= useSelector(store => store.history)
  const {historyCart} = user_1
  
  
  return(
    <div className="orders_header">
      <h3>
        تاریخچه سفارشات :
      </h3>
      {historyCart.map(history => <HistoryItem key={history.id} {...history}/>)}

    </div>
  )
}