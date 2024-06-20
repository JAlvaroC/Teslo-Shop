export const revalidate = 604800 //7dias
import { getProductBySlug } from '@/actions'
import {
  ProductMobileSlideshow,
  ProductSlideshow,
  QuantitySelector,
  SizeSelector,
  StockLabel
} from '@/components'
import { titleFont } from '@/config/font'
import { Metadata, ResolvingMetadata } from 'next'
// import { initialData } from '@/seed/seed'
import { notFound } from 'next/navigation'
import { AddToCart } from './ui/AddToCart'

interface Props {
  params: {
    slug: string
  }
}

export async function generateMetadata (
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug

  // fetch data
  // const product = await fetch(`https://.../${id}`).then((res) => res.json())
  const product = await getProductBySlug(slug)

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []

  return {
    // description: product?.description ?? '',
    title: product?.title ?? 'Producto no encontrado',
    description: product?.description ?? '',
    // images: [`/products/${product?.images[1]}`],
    openGraph: {
      // images: ['/some-specific-page-image.jpg', ...previousImages]
      title: product?.title ?? 'Producto no encontrado',
      description: product?.description ?? '',
      images: [`/products/${product?.images[1]}`]
    }
  }
}

export default async function ProductBySlugPage ({ params }: Props) {
  const { slug } = params
  // const product = initialData.products.find(product => product.slug === slug)
  const product = await getProductBySlug(slug)

  console.log(product)

  if (!product) {
    notFound()
  }
  return (
    <div className='mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3'>
      {/* Slideshow */}
      <div className='col-span-1 md:col-span-2 '>
        {/* <h1>Hola Mundo</h1> */}
        {/* Mobile Slideshow */}
        <ProductMobileSlideshow
          title={product.title}
          images={product.images}
          className='block  md:hidden'
        />
        {/* Desktop Slideshow */}
        <ProductSlideshow
          title={product.title}
          images={product.images}
          className='hidden  md:block'
        />
      </div>
      {/* Detalles */}
      <div className='col-span-1 px-5 '>
        <StockLabel slug={product.slug} />
        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>
        <p className='text-lg mb-5'>{product.price}</p>
        <AddToCart product={product} />
        {/* Descripcion */}
        <h3 className='font-bold text-sm '>Descripcion</h3>
        <p className='font-light'>{product.description}</p>
      </div>
    </div>
  )
}