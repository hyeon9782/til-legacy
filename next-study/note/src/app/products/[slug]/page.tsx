import GoProductsButton from '@/components/GoProductsButton';
import { getProduct, getProducts } from '@/service/products';
import { generateKey } from 'crypto';
import Image from 'next/image';
import { notFound, redirect } from 'next/navigation';
import React from 'react'
type Props = {
  params: {
    slug: string;
  }
}

export const revalidate = 3;

export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름: ${params.slug}`
  }
}

export default async function ProductPage({ params: { slug } }: Props) {
  // 서버 파일에 있는 데이터중 해당 제품의 정보를 찾아서 그걸 보여줌
  const product = await getProduct(slug)
  if (!product) {
    redirect('/products');
  }
  return (
    <>
      <div>{product.name} 제품 설명 페이지</div>
      <Image 
        src={`/images/${product.image}`} 
        alt='img'
        width={300}
        height={300}
       />
       <GoProductsButton />
    </>
  )
}

export async function generateStaticParams() {
  // 모든 제품의 페이지들을 미리 만들어 둘 수 있게 해줌(SSG)
  const products = await getProducts()
  return products.map(product => ({
    slug: product.id
  }))
}