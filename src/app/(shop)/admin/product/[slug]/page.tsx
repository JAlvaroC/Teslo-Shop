// import { getCategories, getProductBySlug } from '@/actions'
// import { Title } from '@/components'
// import { redirect } from 'next/navigation'

// import React from 'react'
// import { ProductForm } from './ui/ProductForm'
// interface Props {
//   params: {
//     slug: string
//   }
// }
// export default async function ProductPage ({ params }: Props) {
//   const { slug } = params

//   //   Estas dos no tienen dependencia  asi que es mejor hacerlo en paralelo
//   //   const product = await getProductBySlug(slug)
//   //   const categories = await getCategories()
//   const [product, categories] = await Promise.all([
//     getProductBySlug(slug),
//     getCategories()
//   ])

//   //   Todo:new
//   if (!product && slug !== 'new') {
//     redirect('/admin/products')
//   }
//   const title = slug === 'new' ? 'Nuevo Producto' : 'Editar Producto'
//   return (
//     <>
//       <Title title={title ?? ''} subtitle={''} className={''} />
//       <ProductForm product={product ?? {}} categories={categories} />
//     </>
//   )
// }
import { getCategories, getProductBySlug } from '@/actions'
import { Title } from '@/components'
import { redirect } from 'next/navigation'
import { ProductForm } from './ui/ProductForm'

interface Props {
  params: {
    slug: string
  }
}

export default async function ProductPage ({ params }: Props) {
  const { slug } = params

  const [product, categories] = await Promise.all([
    getProductBySlug(slug),
    getCategories()
  ])

  // Todo: new
  if (!product && slug !== 'new') {
    redirect('/admin/products')
  }

  const title = slug === 'new' ? 'Nuevo producto' : 'Editar producto'

  return (
    <>
      <Title title={title} subtitle={''} className={''} />

      <ProductForm product={product ?? {}} categories={categories} />
    </>
  )
}
