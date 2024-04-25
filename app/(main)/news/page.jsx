
'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { getAllNews } from '@/actions/news'
import React from 'react'
import Image from 'next/image'
import { MoveUp } from 'lucide-react'
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
import { cn } from '@/lib/utils'
export default function page() {
  const [isLoading, setIsLoading] = React.useState(false)
  const [news, setNews] = React.useState([])
  const [sortedNews, setSortedNews] = React.useState([])
  const [sort, setSort] = React.useState(true)
  const [form, setForm] = React.useState({
    name: '',
    phone: '',
    message: '',
  })
  const [error, setError] = React.useState({
    error: '',
    message: ''
  })

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  React.useEffect(() => {
    setIsLoading(true)
    getAllNews()
      .then((data) => {
        setNews(data)
      })
      .finally(() => setIsLoading(false))
  }, [])

  React.useEffect(() => {
    if (sort) {
      setSortedNews(news.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)))
    }
    else {
      setSortedNews(news.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)))
    }
  }, [news, sort])


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
        </BreadcrumbList>
      </Breadcrumb>
      <div className='w-full flex justify-between items-center'>
        <h2 className='mt-4 text-3xl font-semibold 
          mb-2'>Новости</h2>
        <MoveUp className={
          cn('w-6 h-6 lg:hover:scale-130 transition-all delay-200 ', sort ? 'rotate-180' : '')
        }
          onClick={() => setSort(!sort)}
        />
      </div>
      <div className='w-full flex gap-4 justify-between'>
        <div className='w-full flex gap-2 mt-2 flex-wrap'>
          {
            sortedNews.map((item, index) => (
              <Link href={`/news/${item.id}`} className="bg-white overflow-hidden border-b-4 border-blue-500 lg:w-[32%] sm:w-[48%] w-full cursor-pointer mt-2 ">
                <img src={item.photo} alt="People" className="w-full object-cover h-72 sm:h-48 md:h-64" />
                <div className="p-4 md:p-6">
                  <p className="text-blue-500 font-semibold text-xs mb-1 leading-none">Новость</p>
                  <h3 className="font-semibold mb-2 text-xl leading-tight sm:leading-normal">{item.title}</h3>
                  <div className="text-sm flex items-center">
                    <img src='icons/date.svg' className='w-4 h-4 mr-2' />
                    <p className="leading-none">{new Date(item.createdAt).toLocaleDateString('ru-RU')}</p>
                  </div>
                </div>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}
