'use client'
import React, { useState } from 'react'

// import { Swiper as SwiperObject } from 'Swiper'
import { Swiper as SwiperObject } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
// import 'swiper/css'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import './slideshow.css'
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules'
import Image from 'next/image'
import { ProductImage } from '../product-image/ProductImage'

interface Props {
  images: string[]
  title: string
  className?: string
}
export const ProductSlideshow = ({ images, title, className }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>()
  return (
    <div className={className}>
      {/* <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
 
      </Swiper> */}
      <Swiper
        style={
          {
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff'
          } as React.CSSProperties
        }
        spaceBetween={10}
        navigation={true}
        autoplay={{ delay: 2500 }}
        // thumbs={{ swiper: thumbsSwiper }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
        }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className='mySwiper2'
      >
        {images.map(image => (
          <SwiperSlide key={image}>
            <ProductImage
              // src={`/products/${image}`}
              src={image}
              width={1024}
              height={800}
              alt={title}
              className='rounded-lg object-fill'
            />
          </SwiperSlide>
        ))}
        {/* <img src='https://swiperjs.com/demos/images/nature-1.jpg' /> */}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper'
      >
        {images.map(image => (
          <SwiperSlide key={image}>
            <ProductImage
              // src={`/products/${image}`}
              src={image}
              width={300}
              height={300}
              alt={title}
              className='rounded-lg object-fill'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
