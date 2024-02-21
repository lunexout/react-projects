// @ts-nocheck
import React, { useEffect, useState } from 'react'
import { BreadCrumb } from '../../global/breadcrumb'
import { Layout } from '../../global/layout'
import { Navigation } from '../../global/navigation'
import { Pagination } from '../../global/pagination'
import { ProductSkeleton } from '../../global/skeleton/product'
import { ProductCard } from './components/product-card'

// constants for configuration
const LIMIT = 9

const Products = () => {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])

  const [limit, setLimit] = useState(LIMIT)
  const [total, setTotal] = useState(0)
  const [skip, setSkip] = useState(0)

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true)

      const response = await fetch(
        `https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`
      )
      const data = await response.json()

      setProducts(data.products)
      setTotal(data.total)
      setLimit(data.limit)
      setLoading(false)
    }
    getProducts()
  }, [skip])

  const breadcrumbNavigation = [{ label: 'Products', path: '/products' }]

  return (
    <>
      <Navigation />
      <Layout>
        <BreadCrumb links={breadcrumbNavigation} />
        {loading ? (
          <div className='flex gap-4 flex-wrap'>
            {Array(LIMIT)
              .fill('')
              .map((_skeleton, index) => {
                return <ProductSkeleton key={`skeleton-${index}`} />
              })}
          </div>
        ) : (
          <div className='flex flex-col gap-y-4'>
            <div className='flex gap-4 flex-wrap'>
              {products.map(product => (
                <ProductCard key={product.id} productItem={product} />
              ))}
            </div>
            {total !== 0 && limit !== 0 && (
              <div className='mx-auto'>
                <Pagination
                  pages={Array(Math.ceil(total / LIMIT)).fill(1)}
                  onChangePage={page => setSkip((page - 1) * LIMIT)}
                />
              </div>
            )}
          </div>
        )}
      </Layout>
    </>
  )
}

export default Products
