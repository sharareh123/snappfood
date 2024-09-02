import { filterByCategory } from '../../data/utils/filterByCategory'
import RestaurantList from '../component/RestaurantList'
import { Fast_Food, Iranian_Traditional_Food, Liver_House,Kebab_Restaurant, Home_style_Restaurante } from '../resturantdatabase'

import MainContent from "../component/MainContent";
import '../style.css'


const Page = () => {
  
  const Iranian_Traditional_Food_restaurants = filterByCategory(Iranian_Traditional_Food)

  const Fast_Food_restaurants = filterByCategory(Fast_Food) 

  const Kebab_Restaurant_restaurants = filterByCategory(Kebab_Restaurant)

  const Liver_House_restaurants = filterByCategory(Liver_House)

  const Home_style_Restaurante_restaurants = filterByCategory(Home_style_Restaurante)

  const imageSize = { width: '60px', height: '60px' };
  const textSize ={ fontSize: '10px', padding: '2px' };
  const  iconSize = { width: '5px',height:'5px'};
  const cardSize ={width:'15'};
  return (
    <div className='category_container'>
      <div className='res_list'>
        <div className='res_list_header_container' > <div className='res_list_header'>دسته بندی ها</div></div>
        <div className='res_list_item'> 
            <RestaurantList category={Fast_Food} restaurants={Fast_Food_restaurants} imageSize={imageSize} textSize={textSize} iconSize={iconSize} cardSize={cardSize}/>
        </div>
        <div className='res_list_item'>
          <RestaurantList category={Iranian_Traditional_Food} restaurants={Iranian_Traditional_Food_restaurants} imageSize={imageSize} textSize={textSize} iconSize={iconSize} cardSize={cardSize}/>
        </div>
        <div className='res_list_item'>
           <RestaurantList category={Kebab_Restaurant} restaurants={Kebab_Restaurant_restaurants} imageSize={imageSize} textSize={textSize} iconSize={iconSize} cardSize={cardSize}/>
        </div>
        <div className='res_list_item'>
          <RestaurantList category={Liver_House} restaurants={Liver_House_restaurants} imageSize={imageSize} textSize={textSize} iconSize={iconSize} cardSize={cardSize}/>
        </div>
        <div className='res_list_item'>
           <RestaurantList category={Home_style_Restaurante} restaurants={Home_style_Restaurante_restaurants} imageSize={imageSize} textSize={textSize} iconSize={iconSize} cardSize={cardSize}/>
        </div>
      </div>
      <div className='main_content'>
        <MainContent />
      </div>
    </div>
    
  )
}
export default Page;