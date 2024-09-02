'use client'
import Image from "next/image"
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"
import { Search } from "./Search"
import HeaderCategory from "./HeaderCategory"
import { selectCategory } from "@/data/redux/categorySlice"

const Header = () => {
  const dispatch =useDispatch();
  const {cart} = useSelector(store => store.cart)
  const cartCounts = cart.reduce((init,current) => init = init + current.count,0)
  const handleCategorySelect = (category) => {
    dispatch(selectCategory(category));
  };
  
  return (
    <div className="Header_style">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
       <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div style={{marginLeft:12}}>
          <Image className="snapp_logo" src="/snappLogo.aa72cd99.svg" alt="icon" width={50} height={50}/>
        </div>
        <Link href={'/'}>
          <div>
            <Image src="/home_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg" alt="homepage" width={30} height={30}/>
          </div>
        </Link> 
       </div>
       <Search/>
       <Link href={'/cart'}>
        <div style={{display:'flex',margin:8}}>
          <div>
             <Image src="/shopping-cart_icon-icons.com_72552.png" alt="cart" width={20} height={20 }/>
          </div>
          <div style={{marginRight:5}}>
             {cartCounts ? <span>{cartCounts}</span> : ''}
          </div>
        </div>
       </Link> 
      </div>
      <div>
        <HeaderCategory onCategorySelect={handleCategorySelect}/>
      </div>
    </div>
    
  )
}
export default Header