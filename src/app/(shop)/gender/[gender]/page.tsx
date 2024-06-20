import { getPaginatedProductsWithImages } from '@/actions'
import { Pagination, ProductGrid, Title } from '@/components'
import { Category } from '@/interfaces'
import { initialData } from '@/seed/seed'
import { Gender } from '@prisma/client'
export const revalidate = 60 //segundos
import { notFound, redirect } from 'next/navigation'
// import { Pagination } from 'swiper/modules'

// interface Props {
//   params: {
//     // id: string
//     id: Category
//   }
// }
interface Props {
  params: {
    gender: string
  }
  searchParams: {
    page?: string
  }
}
// const seedProducts = initialData.products
export default async function GenderByPage ({ params, searchParams }: Props) {
  const { gender } = params
  const page = searchParams.page ? parseInt(searchParams.page) : 1
  const { products, currentPage, totalPages } =
    await getPaginatedProductsWithImages({
      page,
      gender: gender as Gender
    })

  if (products.length === 0) {
    redirect(`/gender/${gender}`)
  }
  // const products = seedProducts.filter(product => product.gender === id)

  const labels: Record<string, string> = {
    men: 'para Hombres',
    women: 'para Mujeres',
    kid: 'para Niños',
    unisex: 'para Todos'
  }
  // if (id === 'kids') {
  //   notFound()
  // }

  return (
    <>
      {/* <h1>Category Page {id}</h1> */}
      <Title
        // title={`Articulos de ${(labels as any)[id]} `}
        title={`Articulos de ${labels[gender]} `}
        className='mb-2'
        subtitle='Todos los Productos'
      />
      <ProductGrid products={products} />
      <Pagination totalPages={totalPages} />
    </>
  )
}
