'use client'
import { ProductImage, QuantitySelector } from '@/components'
import { useCartStore } from '@/store'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export const ProductsInCart = () => {
  const updateProductQuantity = useCartStore(
    state => state.updateProductQuantity
  )
  const removeProduct = useCartStore(state => state.removeProduct)
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
          <ProductImage
            // src={`/products/${product.images[0]}`}
            // src={`/products/${product.image}`}
            src={product.image}
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
            <Link
              className='hover:underline cursor-pointer'
              href={`/product/${product.slug}`}
            >
              {product.size} - {product.title}
            </Link>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <QuantitySelector
              //   quantity={3}
              quantity={product.quantity}
              //   onQuantityChanged={value => console.log(value)}
              onQuantityChanged={quantity =>
                updateProductQuantity(product, quantity)
              }
            />
            <button
              onClick={() => removeProduct(product)}
              className='underline mt-3'
            >
              Remover
            </button>
          </div>
        </div>
      ))}
    </>
  )
}

// https://cdn.www.gob.pe/uploads/document/file/1908197/Manual%20El%20cultivo%20de%20tara%20en%20Cajamarca.pdf.pdf
