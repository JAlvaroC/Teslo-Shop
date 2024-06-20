import { getPaginatedProductsWithImages } from '@/actions'
import { Pagination, ProductGrid, Title } from '@/components'
import { titleFont } from '@/config/font'
export const revalidate = 60 //segundos
// import { initialData } from '@/seed/seed'
import Image from 'next/image'
import { redirect } from 'next/navigation'

// const products = initialData.products

interface Props {
  searchParams: {
    page?: string
  }
}
export default async function Home ({ searchParams }: Props) {
  console.log({ searchParams })
  const page = searchParams.page ? parseInt(searchParams.page) : 1
  const { products, currentPage, totalPages } =
    await getPaginatedProductsWithImages({
      page
    })

  console.log({ currentPage, totalPages })
  if (products.length === 0) {
    redirect('/')
  }
  // console.log(products)
  return (
    // <main className='flex min-h-screen flex-col items-center justify-between p-24'>
    // <main className=''>
    //   <h1>hola Mundo</h1>
    //   <h1 className={`${titleFont.className} font-bold`}> hola Mundo</h1>
    //   <h1 className={`${titleFont.className}`}> hola Mundo</h1>
    // </main>
    <>
      <Title title='Tienda' className='mb-2' subtitle='Todos los Productos' />
      <ProductGrid products={products} />
      <Pagination totalPages={totalPages} />
    </>
  )
}
