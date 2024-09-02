'use client';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { DATABASE } from '../resturantdatabase';
import Image from 'next/image';
import Link from 'next/link';
import '../style.css';
import { useRouter } from 'next/navigation';

const MainContent = () => {
  const { selectedCategory } = useSelector((store) => store.restaurantTypes);
  const router = useRouter();

  useEffect(() => {
    if (selectedCategory !== 'restaurant') {
      router.push('/notfound');
    }
  }, [selectedCategory, router]);

  if (selectedCategory !== 'restaurant') {
    return null;
  }

  return (
    <main>
      <div className='main_res_card_container'>
        {DATABASE.restaurants.map((restaurant) => (
          <Link key={restaurant.id} href={`/${restaurant.category}/${restaurant.name}`} style={{ textDecorationLine: 'none' }}>
            <div className='main_res_card'>
              <div className='main_image_container'>
                <Image className='main_res_img' src={restaurant.image} alt={restaurant.name} width={200} height={180} />
                <div className='icon_container'>
                  <Image src={restaurant.icon} alt={restaurant.icon} width={50} height={50} className='main_icon' />
                </div>
              </div>
              <h3 className='main_res_name'>{restaurant.name}</h3>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <h5 className='res_rang_icon'> {restaurant.rang_icon}</h5>
                <h5 className='res_rang_num'> {restaurant.rang_num}</h5>
              </div>
              <div className='res_description'>
                {restaurant.description}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default MainContent;