'use client'
import { getNewsById } from '@/actions/news';
import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation';
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from 'next/link'

export default function page() {
  const [loading, setIsLoading] = useState(false);
  const [news, setNews] = useState(null);
  const { newsId } = useParams()

  useEffect(() => {
    setIsLoading(true)
    getNewsById(newsId)
      .then((news) => {
        setNews(news)
      })
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false))
  }, [newsId])

  return (
    <div className='py-20 min-h-full px-4 mx-auto max-w-[1200px] relative'>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Домашняя</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/news">Новости</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={"/news/" + news?.id}>{news?.title}</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h2 className='mt-4 text-3xl font-semibold mb-2'>Новость</h2>
      <div className='w-full flex gap-4 justify-between'>
        <div className='w-full flex gap-2 mt-2 flex-wrap'>
          {loading && <div className="w-full h-96 bg-gray-200 rounded-md animate-pulse"></div>}
          {
            !loading && news && <div className="bg-white overflow-hidden border-b-4 border-blue-500 flex-col md:flex-row md:flex gap-2 w-full mt-2 relative ">
              <img src={news.photo} alt="People" className="w-full md:w-64 object-cover h-80 md:h-64" />
              <div className="p-4 md:p-6 flex flex-col gap-2 pt-0 md:pt-0">
                <p className="text-blue-500 font-semibold text-xl mb-1 leading-none mt-2 md:mt-0">Новость</p>
                <h3 className="font-semibold mb-2 text-md leading-tight sm:leading-normal">{news.title}</h3>
                <p className="text-sm" dangerouslySetInnerHTML={{ __html: news.text }}></p>
                <div className="text-sm flex items-center absolute bottom-2 right-2">
                  <img src='icons/date.svg' className='w-4 h-4 mr-2' />
                  <p className="leading-none">{new Date(news.createdAt).toLocaleDateString('ru-RU')}</p>
                </div>
              </div>
            </div>

          }
        </div>
      </div>
    </div>
  )
}
