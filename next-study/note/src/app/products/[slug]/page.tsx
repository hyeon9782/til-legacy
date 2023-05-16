import { generateKey } from 'crypto';
import { notFound } from 'next/navigation';
import React from 'react'
type Props = {
  params: {
    slug: string;
  }
}

export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름: ${params.slug}`
  }
}

export default function PantsPage({ params }: Props) {
  if (params.slug === 'nothing') {
    notFound()
  }
  return (
    <div>{params.slug} 제품 페이지</div>
  )
}

export function generateStaticParams() {
  const products = ['pants', 'skirt'];
  return products.map(product => ({
    slug: product
  }))
}