import { useCallback, useMemo, useState } from "react"
import { searchByName } from "@/data/utils/searchByName"
import Image from "next/image"
import { addToCart } from "@/data/redux/cartSlice"
import { useDispatch } from "react-redux"
import '../style.css'

export const Search  = () => {
  const [search,setSearch]= useState('')
  const [selectedFood, setSelectedFood] = useState(null);
  const dispatch = useDispatch()
  const handleChange = useCallback ((e)=>{
   setSearch(e.target.value)
  },[])
 
  const SEARCH_FOOD = useMemo(()=>searchByName(search),[search]) 
  const isNotSearchEmpty = SEARCH_FOOD.length
  
 const handleFoodClick = (food) => {
    setSelectedFood(food);
  };

  const handleCloseFoodInfo = () => {
    setSelectedFood(null);
  };
  
  const handleAddToCart = useCallback(() => {
    if (selectedFood) {
      dispatch(addToCart(selectedFood));
    }
  }, [dispatch, selectedFood]);
  
  return(
    <div style={{position:'relative'}}>
      <input placeholder="جستجو..." value={search} onChange={handleChange}/>
      <div style={{position:'absolute', width:'95%'}}>
        {!! search && SEARCH_FOOD.map(food => (
          
            <div className="search_food_container" onClick={() => handleFoodClick(food)}>
              <Image className="search_food_img" src={food.image} alt={food.name} width={25} height={25}/>
              <div className="search_food_name">
                {food.name}
              </div>
            </div>
        ))}
      </div>
      {selectedFood && (
        <div className="selectfood_container">
          <div className="selectfood_name">{selectedFood.name}</div>
          <Image className="selectfood_img" src={selectedFood.image} alt={selectedFood.name} width={100} height={100} />
          <p className="selectfood_des">{selectedFood.description}</p>
          <p className="selectfood_price">قیمت: {selectedFood.price} تومان</p>
          <div>
            <button onClick={handleCloseFoodInfo} style={{ marginTop: 10 , marginLeft:10}}>
              بستن
            </button>
            <button onClick={handleAddToCart} style={{ marginTop: 10 }}>
              افزودن
            </button>
          </div>
          
        </div>
      )}
    </div>
  )
}