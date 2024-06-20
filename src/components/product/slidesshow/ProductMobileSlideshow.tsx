'use client'
import React, { useState } from 'react'

import { Swiper as SwiperObject } from 'Swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
// import 'swiper/css'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/thumbs'

import './slideshow.css'
import {
  Autoplay,
  FreeMode,
  Navigation,
  Pagination,
  Thumbs
} from 'swiper/modules'
import Image from 'next/image'

interface Props {
  images: string[]
  title: string
  className?: string
}
export const ProductMobileSlideshow = ({ images, title, className }: Props) => {
  // const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>()
  return (
    <div className={className}>
      <Swiper
        style={{
          width: '100vw',
          height: '500px'
        }}
        // navigation={true}
        pagination
        autoplay={{ delay: 2500 }}
        // thumbs={{
        //   swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
        // }}
        modules={[FreeMode, Thumbs, Autoplay, Pagination]}
        className='mySwiper2'
      >
        {images.map(image => (
          <SwiperSlide key={image}>
            <Image
              src={`/products/${image}`}
              width={600}
              height={500}
              alt={title}
              className='object-fill'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
