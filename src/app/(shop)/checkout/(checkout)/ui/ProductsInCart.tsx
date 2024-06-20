'use client'
import { QuantitySelector } from '@/components'
import { useCartStore } from '@/store'
import { currencyFormat } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export const ProductsInCart = () => {
  const [loaded, setLoaded] = useState(false)
  const productsInCart = useCartStore(state => state.cart)

  useEffect(() => {
    setLoaded(true)
  }, [])

  if (!loaded) {
    return <p>Loading ...</p>
  }
  return (
    <>
      {productsInCart.map(product => (
        <div key={`${product.slug}-${product.size}`} className='flex mb-5'>
          <Image
            // src={`/products/${product.images[0]}`}
            src={`/products/${product.image}`}
            width={100}
            height={100}
            style={{
              width: '100px',
              height: '100px'
            }}
            alt={product.title}
            className='mr-5 rounded-none'
          />
          <div>
            <span>
              {product.size} - {product.title} ({product.quantity})
            </span>

            <p className='font-bold'>
              {currencyFormat(product.price * product.quantity)}
            </p>
          </div>
        </div>
      ))}
    </>
  )
}

// https://cdn.www.gob.pe/uploads/document/file/1908197/Manual%20El%20cultivo%20de%20tara%20en%20Cajamarca.pdf.pdf
