'use client'
import { createReview, getAllReviews } from '@/actions/review'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


export default function page() {
  const [isLoading, setIsLoading] = React.useState(false)
  const [reviews, setReviews] = React.useState([])
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
    getAllReviews()
      .then((data) => {
        setReviews(data)
      })
      .finally(() => setIsLoading(false))
  }, [])

  const submit = async (e) => {
    e.preventDefault()
    const res = await createReview(form)
    if (res.error) {
      setUser(res)
    } else {
      console.log(res)
      setError({ error: '', message: '' })
      setForm({
        name: '',
        phone: '',
        message: '',
      })
      setReviews([...reviews, res])

    }
  }


  return (
    <div className='py-20 min-h-full px-4 mx-auto max-w-[1200px] relative'>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Домашняя</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/callback">Отзывы</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h2 className='mt-4 text-3xl font-semibold mb-2'>Отзывы</h2>
      {isLoading && <div className='text-3xl text-center'>Загрузка...</div>}
      {!isLoading && reviews.length > 0 &&
        <div className='text-3xl text-center flex flex-wrap gap-3'>
          {
            reviews.map((review) => (
              <Card className="w-full md:w-[48%] lg:w-[32%]" key={review.id}>
                <CardHeader>
                  <CardTitle className="text-md text-left">{review.name}</CardTitle>
                  <CardDescription></CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-left flex flex-col gap-2">
                    <span className="text-xl">Текст отзыва:</span>
                    <p className='text-xl'>{review.message}</p>
                  </div>
                </CardContent>
                <CardFooter className="text-xl text-right">
                  {new Date(review.date).toLocaleDateString()}
                </CardFooter>
              </Card>
            ))
          }
        </div>}
      {!isLoading && reviews.length === 0 && <div className='text-3xl text-center '>Нет отзывов</div>}
      <form className='flex flex-col gap-3 w-[300px] mx-auto mt-10'>
        <Input placeholder='Имя' value={form.name} name='name' onChange={onChange} />
        <Input placeholder='Телефон' value={form.phone} name='phone' onChange={onChange} />
        <Textarea placeholder='Сообщение' value={form.message} name='message' onChange={onChange} />
        <Button onClick={submit} className='text-lg'>Оставить отзыв</Button>
      </form>
    </div>
  )
}
