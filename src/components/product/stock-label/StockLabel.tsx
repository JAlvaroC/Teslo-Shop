'use client'
import { getProductBySlug, getStockBySlug } from '@/actions'
import { titleFont } from '@/config/font'
import React, { useEffect, useState } from 'react'

interface Props {
  slug: string
}
export const StockLabel = ({ slug }: Props) => {
  const [stock, setStock] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const getStock = async () => {
      // todo llamar su server actions
      const inStock = await getStockBySlug(slug)
      // console.log('llego', { inStock })
      setStock(inStock)
      setIsLoading(false)
    }
    getStock()
  }, [slug])

  return (
    <>
      {isLoading ? (
        <h1
          className={`${titleFont.className} antialiased font-bold text-lg animate-pulse bg-gray-200`}
        >
          &nbsp;
        </h1>
      ) : (
        <h1 className={`${titleFont.className} antialiased font-bold text-lg`}>
          Stock: {stock}
        </h1>
      )}
    </>
  )
}
