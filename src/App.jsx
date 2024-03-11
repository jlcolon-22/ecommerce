import { useEffect, useLayoutEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';



function App() {

  
  return (
    <>
  

      {/* carousel */}
      <section className='relative'>
      <Swiper
        className='w-full'
        autoplay={{ delay: 7000 }}
        modules={[Navigation, Pagination,Autoplay]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
      
      >
        <SwiperSlide className="carousel-item relative w-full" >
          <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
        </SwiperSlide>
        <SwiperSlide className="carousel-item relative w-full" >
          <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
        </SwiperSlide>
        <SwiperSlide className="carousel-item relative w-full" >
          <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
        </SwiperSlide>
        <SwiperSlide className="carousel-item relative w-full" >
          <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
        </SwiperSlide>
        
      </Swiper>
      </section>
      {/* end carousel */}


      {/* new product */}
      <section className='mt-20'>
          <div className='container mx-auto'>
          <h1 className='text-center font-bold text-4xl font-serif  '>Our New Products</h1>
          </div>
      </section>
      {/* end new product */}
    </>
  )
}

export default App
