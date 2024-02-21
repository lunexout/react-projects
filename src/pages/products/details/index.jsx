// @ts-nocheck
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BreadCrumb } from '../../../global/breadcrumb/index.jsx'
import { Comments } from '../../../global/comments/index.jsx'
import { Layout } from '../../../global/layout'
import { Navigation } from '../../../global/navigation'
import { Spinner } from '../../../global/spinner'
import { ProductCardDetails } from './components/product-card-details.jsx'

const ProductDetails = () => {
  const params = useParams()

  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true)
      const response = await fetch(
        `https://dummyjson.com/products/${params.productId}`
      )
      const product = await response.json()

      setProduct(product)
      setLoading(false)
    }
    getProduct()
  }, [])

  const breadcrumbNavigation = [
    { label: 'Products', path: '/products' },
    { label: product?.title ?? '', path: `/products/${params.productId}` }
  ]

  return (
    <>
      <Navigation />
      <Layout>
        <BreadCrumb links={breadcrumbNavigation} />
        {loading ? (
          <Spinner />
        ) : (
          <ProductCardDetails product={product} commentsNode={<Comments />} />
        )}
      </Layout>
    </>
  )
}

export default ProductDetails
