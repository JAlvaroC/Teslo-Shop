import Image from 'next/image'
import React from 'react'
interface Props {
  src?: string
  alt: string
  className?: React.StyleHTMLAttributes<HTMLImageElement>['className']
  style?: React.StyleHTMLAttributes<HTMLImageElement>['style']
  width: number
  height: number
}
export const ProductImage = ({
  src,
  alt,
  className,
  width,
  style,
  height
}: Props) => {
  const localSrc = src
    ? src.startsWith('http') //https://urlcompletodeimagen.jpg
      ? src
      : `/products/${src}`
    : '/imgs/placeholder.jpg'
  return (
    <Image
      //   src={`/products/${product.ProductImage[0].url}`}
      src={localSrc}
      width={width}
      height={height}
      alt={alt}
      className={className}
      style={style}
    />
  )
}
