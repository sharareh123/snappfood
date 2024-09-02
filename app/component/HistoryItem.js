import Link from "next/link"

export const HistoryItem = ({id,totalPrice,status}) => {
  return (
   <div> 
    <div className="order_history">
      <div className="order_id"> شماره سفارش: {id}</div>
      <div className="order_total_price"> مجموع: {totalPrice}</div>
      <div className="order_status">وضعیت سفارش: {status}</div>
      <Link href={`/cart/history/${id}`}>
        <div className="order_detail">نمایش جزییات</div>
      </Link>
    </div>
   </div> 

  )
}