import Link from 'next/link';
import '../style.css';
import Image from 'next/image';

const HeaderCategory = ({ onCategorySelect }) => {
  
  return(
  <Link href={'/restaurantType'}>
    <div className="scroll-container">
      <div className="scroll-item" onClick={() => onCategorySelect('restaurant')}>
        <div>
          <Image src="/header category/restaurant-desktop.png" alt='restaurant' width={50} height={50}/>
        </div>
        <div className="items">
          رستوران
        </div>  
     </div>
     <div className="scroll-item" onClick={() => onCategorySelect('supermarket')}>
      <div>
        <Image src="/header category/supermarket-desktop.png" alt='supermarket' width={50} height={50}/>
      </div>
      <div className="items">
        سوپرمارکت
      </div>
     </div>
     <div className="scroll-item" onClick={() => onCategorySelect('cafe')} >
      <div>
        <Image src="/header category/cafe-desktop.png" alt='cafe' width={50} height={50}/>
      </div>
      <div className="items">
        کافه 
      </div>
     </div>
     <div className="scroll-item" onClick={() => onCategorySelect('confectionary')}>
      <div>
        <Image src="/header category/confectionary-desktop.png" alt='confectionary' width={50} height={50}/>
      </div>
      <div className="items">
        شیرینی
      </div>
     </div>
     <div className="scroll-item" onClick={() => onCategorySelect('bread')}>
      <div>
          <Image src="/header category/bread-desktop.png" alt='bread' width={50} height={50}/>
      </div>
      <div className="items">
        نانوایی
      </div>
     </div>
     <div className="scroll-item" onClick={() => onCategorySelect('fruit')}>
      <div>
        <Image src="/header category/fruit-desktop.png" alt='fruit' width={50} height={50}/>
      </div>
      <div className="items">
        میوه
      </div>
     </div>
     <div className="scroll-item" onClick={() => onCategorySelect('protein')}>
      <div>
        <Image src="/header category/protein-desktop.png" alt='protein' width={50} height={50}/>
      </div>
      <div className="items">
        پروتئین
      </div>
     </div>
     <div className="scroll-item" onClick={() => onCategorySelect('icecream')}>
      <div>
        <Image src="/header category/icecream-desktop.png" alt='icecream' width={50} height={50}/>
      </div>
      <div className="items">
        آبیموه بستنی
      </div>
     </div>
     <div className="scroll-item" onClick={() => onCategorySelect('dairy')}>
      <div>
         <Image src="/header category/dairy-desktop.png" alt='dairy' width={50} height={50}/>
      </div>
      <div className="items">
        لبنیات
      </div>
     </div>
     <div className="scroll-item" onClick={() => onCategorySelect('other')}>
      <div>
        <Image src="/header category/other.webp" alt='other' width={50} height={50}/>
      </div>
      <div className="items">
        سایر
      </div>
     </div>
    </div>
  </Link>
  )
};

export default HeaderCategory;